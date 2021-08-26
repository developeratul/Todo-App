import "../styles/style.css";
import type { AppProps } from "next/app";
import { ThemeProvider, TodoProvider } from "../context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </ThemeProvider>
  );
}
export default MyApp;
