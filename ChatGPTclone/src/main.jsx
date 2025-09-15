import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ChatHeader from './components/ChatHeader.jsx'; // Fíjate en el nombre y carpeta

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <ChatHeader />
      <App />
    </>
  </StrictMode>
);
