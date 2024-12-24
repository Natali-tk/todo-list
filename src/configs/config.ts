import { v4 as uuidv4 } from "uuid";

export const config = {
  BASE_URL: "/",
  
}
export const initialArr = [{
  id: uuidv4(),
  title: "",
  description: "",
  completed: false,
}]