import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// custom hooks for ThemeContext Consumers
export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// function for ThemeContext Provider
export const ThemeProvider = ({ children }) => {
  const [themeToggler, setThemeToggler] = useState("light");

  return (
    <ThemeContext.Provider value={themeToggler}>
      <ThemeUpdateContext.Provider value={() => setThemeToggler(prevState => (prevState === "light" ? "dark" : "light"))}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
