import React from "react";
import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "../context/ThemeContext";

function Providers({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
}

export default Providers;
