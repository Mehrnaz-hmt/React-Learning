import { createContext, useState } from "react";
import "./App.css";
import Form from "./components/Form";

export const ThemeContext = createContext()

export default function MyApp() {

  const [theme, setTheme] = useState("light");

  return (
  <ThemeContext.Provider value={theme}>
      <div>
      <Form theme={theme} />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        Use dark mode
      </label>
    </div>
  </ThemeContext.Provider>
  );
}
