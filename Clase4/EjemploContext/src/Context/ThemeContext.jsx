// ThemeContext.jsx
import React, { createContext, useState } from 'react';

// 1. Crear el contexto
const ThemeContext = createContext();

// 2. Crear el proveedor
const ThemeProvider = ({ children }) => {
  // Estado global que queremos compartir
  const [theme, setTheme] = useState('light');

  // Value es lo que estará disponible para todos los componentes hijos
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
