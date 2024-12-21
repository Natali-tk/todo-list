import Loading from "@/components/loading/Loading";
import TodoSearch from "@/components/todoSearch/TodoSearch";
import TodosList from "@/components/todosList/TodosList";
import { useGetTodoListQuery } from "@/store/slices/todosSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const Home = () => {
  const { data: todoList, isLoading, isError, error } = useGetTodoListQuery();
  const [wordEntered, setWordEntered] = useState("");
  

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="hero min-h-[calc(100vh-77px)] ">
              <div className="hero-content px-4 pt-12 lg:px-120 w-640px flex justify-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-center mb-6 ">
                Things To Do
                </h1>
                <NavLink to="/add"><span className="text-3xl text-center">Create new task</span></NavLink>
                <TodoSearch wordEntered={wordEntered} setWordEntered={setWordEntered} />
                {todoList && <TodosList todos={todoList} wordEntered={wordEntered} />}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
