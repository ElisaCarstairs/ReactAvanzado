// Components/CurrentTheme.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const CurrentTheme = () => {
  const { theme } = useContext(ThemeContext);

  return <p>El tema actual es: <strong>{theme}</strong></p>;
};

export default CurrentTheme;
