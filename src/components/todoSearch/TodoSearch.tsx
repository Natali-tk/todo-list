import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { v1 as uuidv1 } from "uuid";
import { useInputSearch } from "@/hooks/useInputSearch";
import { useDebounce } from "@/hooks/useDebounce";
import { Todo, useGetTodoListQuery } from "@/store/slices/todosSlice";

interface TodoSearchProps {
  wordEntered: string;
  setWordEntered: Dispatch<SetStateAction<string>>;
}

const TodoSearch = ({ wordEntered, setWordEntered }: TodoSearchProps) => {
  const input = useInputSearch();
  // const { data: todoList, isLoading, isError, error } = useGetTodoListQuery();
  const debounced = useDebounce(input.value);
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")?
       JSON.parse(localStorage.getItem("todos")!):[]
      
  );
  const [dropdown, setDropdown] = useState(false);


  async function searchTodo() {
    setTodos(todos);
  }

  useEffect(() => {
    if (debounced.length > 1) {
      searchTodo().then(() => setDropdown(true));
    } else {
      setDropdown(false);
    }
  }, [debounced]);

 


  return (
    <div className="mb-4 relative flex justify-center mt-8 max-w-sm">
      <input
        type="text"
        className="border py-2 px-4 mb-4  outline-0  text-black"
        placeholder="Enter task to do "
        {...input}
      />
      {dropdown && (
        <ul className="list-none absolute  flex flex-col  w-52 h-[200px] top-[42px] w-640px shadow-md bg-white overflow-y-scroll text-black">
          {todos &&
            (todos as Todo[]).map((todo) => (
              <li
                key={uuidv1()}
                className="py-2 px-4  hover:bg-gray-500 hover:transition-colors cursor-pointer hover:text-orange"
                onClick={() => {
                  setDropdown(false);
                  setWordEntered(todo.title)
                }}
              >
                {todo.title}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default TodoSearch;
