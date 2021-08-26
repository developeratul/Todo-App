import React, { useRef, useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { useContext } from "react";
import { TodoContext } from "../../context";
import { Todo } from "../../interfaces";
import generateRandomId from "../../utils/generateRandomId";
import { useEffect } from "react";

const CreateTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setTodos, todos } = useContext(TodoContext);
  const inputRef = useRef<HTMLInputElement>(null);

  function AddTodo(event: React.KeyboardEvent) {
    if (event.code === "Enter" && inputValue !== "") {
      const newTodo: Todo = {
        id: generateRandomId(),
        todo: inputValue,
        isActive: true,
        time: Date.now(),
      };
      setTodos((pre) => [...pre, newTodo] || []);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="create_todo">
      <div className="icon_container">
        <RadioButtonUncheckedIcon />
      </div>
      <div className="input_container">
        <input
          type="text"
          ref={inputRef}
          placeholder="Create a new todo"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={AddTodo}
        />
      </div>
    </div>
  );
};

export default CreateTodo;
