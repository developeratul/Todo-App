import { Button } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../../context";
import { Todo } from "../../interfaces";

enum filterTypes {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
const { ALL, ACTIVE, COMPLETED } = filterTypes;

const StatusBar = () => {
  const [todosInStorage, setTodosInStorage] = useState<any[]>([]);
  const [filterState, setFilterState] = useState<string>(ALL);
  const { todos, setTodos } = useContext(TodoContext);

  function clearCompleted() {
    const filteredList = todosInStorage.filter((todo: Todo) => todo.isActive);
    setTodos(filteredList);
    localStorage.setItem("todos", JSON.stringify(filteredList || []));
  }

  function filterActives() {
    setFilterState(ACTIVE);
    setTodos(todosInStorage.filter((todo: Todo) => todo.isActive));
  }

  function filterCompleted() {
    setFilterState(COMPLETED);
    setTodos(todosInStorage.filter((todo: Todo) => !todo.isActive));
  }

  function filterAll() {
    setFilterState(ALL);
    setTodos(todosInStorage);
  }

  useEffect(() => {
    setTodosInStorage(JSON.parse(localStorage.getItem("todos") || "[]") || []);
  }, [todos]);

  return (
    <div className="status_bar">
      <div className="status_bar_item items_left">
        {todosInStorage.filter((todo: Todo) => todo.isActive).length} item
        {todosInStorage.filter((todo: Todo) => todo.isActive).length <= 1
          ? null
          : "s"}{" "}
        left
      </div>

      <div className="status_bar_items filtering_options">
        <div
          onClick={filterAll}
          className={`single_filter ${filterState === ALL ? "active" : ""}`}
        >
          All
        </div>
        <div
          onClick={filterActives}
          className={`single_filter ${filterState === ACTIVE ? "active" : ""}`}
        >
          Active
        </div>
        <div
          className={`single_filter ${
            filterState === COMPLETED ? "active" : ""
          }`}
          onClick={filterCompleted}
        >
          Completed
        </div>
      </div>

      <div className="status_bar_items clear_completed_button">
        <Button onClick={clearCompleted} variant="text">
          clear completed
        </Button>
      </div>
    </div>
  );
};

export default StatusBar;
