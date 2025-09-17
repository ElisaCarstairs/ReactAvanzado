import { createContext, useReducer, useEffect } from "react";

// Estado inicial
const initialState = {
  messages: [],
  input: ""
};

// Reducer para manejar acciones
function chatReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: action.payload };

    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, sender: "user" }],
        input: ""
      };

    case "RECEIVE_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, sender: "LLM" }]
      };

    case "LOAD_HISTORY":
      return { ...state, messages: action.payload };

    case "CLEAR_HISTORY":
      return { ...state, messages: [] };

    default:
      return state;
  }
}

// Crear el contexto
export const ChatContext = createContext();

// Proveedor del contexto
export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  // 🔹 cargar historial al iniciar
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatHistory");
    if (savedMessages) {
      dispatch({ type: "LOAD_HISTORY", payload: JSON.parse(savedMessages) });
    }
  }, []);

  // 🔹 guardar historial cada vez que cambie
  useEffect(() => {
    if (state.messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(state.messages));
    }
  }, [state.messages]);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
