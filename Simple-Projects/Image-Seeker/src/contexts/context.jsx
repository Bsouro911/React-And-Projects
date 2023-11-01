import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";

  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("robots");
  const toggleIsDark = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkTheme", !isDark);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  return (
    <AppContext.Provider
      value={{ isDark, toggleIsDark, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
