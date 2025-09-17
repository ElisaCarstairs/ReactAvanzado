// App.jsx
import React from "react";
import { ThemeProvider } from "./Context/ThemeContext"; // <-- ruta correcta al contexto
import ThemeSwitcher from "./Components/ThemeSwitcher"; // <-- ruta correcta al componente
import CurrentTheme from "./Components/CurrentTheme";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Ejemplo de useContext en React</h1>
          <ThemeSwitcher />
          <CurrentTheme />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
