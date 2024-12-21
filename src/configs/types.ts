export interface TodoInterface {
  id: number
  title: string
  description: string
  completed: boolean
}

export interface TodosProps {
  todos: Array<TodoInterface>;
}