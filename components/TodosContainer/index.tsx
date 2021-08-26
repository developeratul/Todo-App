import { IconButton } from "@material-ui/core";
import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { Todo } from "../../interfaces";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";

const TodosContainer = () => {
  const { todos, setTodos } = useContext(TodoContext);

  function removeItem(id: string) {
    const filteredItems = todos.filter((todo) => todo.id !== id);
    setTodos(filteredItems);
    localStorage.setItem("todos", JSON.stringify(filteredItems));
  }

  function updateStatus(id: string, status: boolean) {
    const items = todos.map((todo: Todo) => {
      if (todo.id === id) {
        todo.isActive = !status;
      }

      return todo;
    });

    setTodos(items);
    localStorage.setItem("todos", JSON.stringify(items));
  }

  return (
    <div className="todos_container">
      {!todos.length ? (
        <h2 className="no_message">No Items</h2>
      ) : (
        <ul className="todos_list">
          {todos.map((todo: Todo) => {
            const { todo: todoTitle, id, isActive } = todo;

            return (
              <li className={!isActive ? "inactive" : ""} key={id}>
                <span className="icon_container">
                  <IconButton onClick={() => updateStatus(id, isActive)}>
                    {isActive ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />}
                  </IconButton>
                </span>
                <span className="todo_text_container">{todoTitle}</span>
                <span className="remove_button">
                  <IconButton onClick={() => removeItem(id)}>
                    <CloseIcon />
                  </IconButton>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default TodosContainer;
