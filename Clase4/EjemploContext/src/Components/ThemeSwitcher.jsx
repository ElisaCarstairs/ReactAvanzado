// ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';


const ThemeSwitcher = () => {
  // useContext nos da acceso al estado y al setter del ThemeContext
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        padding: '10px 20px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px'
      }}
    >
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

export default ThemeSwitcher;
