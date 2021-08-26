import React, { SetStateAction } from "react";
import { Dispatch } from "react";
import { useState } from "react";
import { createContext } from "react";

interface TodoContextInterface {
  todos: any[];
  setTodos: Dispatch<SetStateAction<any[]>>;
}

export const TodoContext = createContext<TodoContextInterface>({
  todos: [],
  setTodos: () => [],
});

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
