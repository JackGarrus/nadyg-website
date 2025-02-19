"use client";

import Moon from "../icons/Moon";
import Sun from "../icons/Sun";
import { useTheme } from "./ThemeProvider";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} aria-label="Cambia tema">
      {theme === "light" ? (
        <Moon className="icon" color="#38765b" />
      ) : (
        <Sun className="icon" color="#38765b" />
      )}
    </button>
  );
};

export default ThemeToggle;
