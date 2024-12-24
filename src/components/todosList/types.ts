export interface TodoInterface {
  id: string
  title: string
  description:string
  completed: boolean
}



export interface TodosProps{
  todos: Array<TodoInterface>
  wordEntered: string;
}