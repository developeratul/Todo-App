import React, { createContext, useState } from "react";

interface ThemeContextInterface {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "",
  setTheme: () => "",
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
