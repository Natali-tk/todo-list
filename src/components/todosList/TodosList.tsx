import { TodoInterface, TodosProps } from "./types"


const TodosList = ({ todos, wordEntered }: TodosProps) => {


  return (
    <div className="max-w-xs flex justify-center items-center">
      {wordEntered !== "" ? (<p className="text-2xl">{wordEntered}</p>) :
        (<ul className=" flex-col justify-center items-center gap-x-5 max-w-screen-sm">
          {(todos?.length) && todos.map((todo: TodoInterface, index: number) => {
            return (
              <li key={todo.id}>
                <p className="text-2xl">{todo.title}</p>
              </li>
            )
          })}
        </ul>)
      }
      
   
    </div>
  )
}
export default TodosList