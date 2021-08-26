import { useContext, useEffect } from "react";

// contexts
import { ThemeContext, TodoContext } from "../context";

// components
import CreateTodo from "../components/CreateTodo";
import Seo from "../components/Seo";
import TodosContainer from "../components/TodosContainer";
import Header from "../components/Header";
import StatusBar from "../components/StatusBar";

const index = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setTodos } = useContext(TodoContext);

  useEffect(() => {
    setTheme(
      (pre) => localStorage.getItem("theme")?.replaceAll('"', "") || pre
    );
    setTodos((pre) => JSON.parse(localStorage.getItem("todos") || "[]") || pre);
  }, []);

  return (
    <Seo>
      <main className={theme}>
        <div className="container">
          <Header />
          <CreateTodo />
          <TodosContainer />
          <StatusBar />
        </div>
      </main>
    </Seo>
  );
};

export default index;
