import { useAddTodoMutation } from "@/store/slices/todosSlice";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../button";
import { useTheme } from "@/context/Theme/Theme";

export const FormAdd = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme();

  const [addTodo, data] = useAddTodoMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newAdd = {
      id: uuidv4(),
      title: newTitle,
      description: newDesc ? newDesc : "",
      completed: false,
    };
    console.log(newAdd);

    if (newTitle && newDesc) {
      addTodo(newAdd);
    }
    navigate(`/`);
    setNewTitle("");
    setNewDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-6 max-w-sm m-16"
    >
      <h1>Create new task</h1>
      <input
        type="text"
        id="title"
        name="title"
        required
        className={`text-black border-2 border-solid border-blue p-2 w-full focus:outline-none  ${
          theme === " dark" ? "border-none" : "rounded-md"
        }`}
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        id="desc"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
        placeholder="Enter description"
        className={`text-black border-2 border-solid border-blue p-2  w-full focus:outline-none ${
          theme === " dark" ? "border-none" : "rounded-md"
        }`}
      />

      <Button label="Add" type="submit">
        <Icon icon="ic:sharp-plus" width="24" height="24" />
      </Button>
    </form>
  );
};
