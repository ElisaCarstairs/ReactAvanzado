import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChatProvider } from './context/ChatContext.jsx' // 👈 nuevo

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </StrictMode>,
)
