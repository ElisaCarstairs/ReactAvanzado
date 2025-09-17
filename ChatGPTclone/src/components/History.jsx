import React from "react";
import "./History.css";

// 🔹 VERSIÓN 1 (mock): se mostrarían mensajes fijos
// const previousQueries = ["Hola", "Cómo programar mejor", "Explica React"];

function History({ messages, onSelect }) {
  return (
    <div className="history-box">
      <h2>Historial</h2>
      {messages.length === 0 ? (
        <p className="empty">No hay consultas previas</p>
      ) : (
        <ul>
          {messages
            .filter((m) => m.sender === "user") // solo consultas del usuario
            .map((msg, i) => (
              <li key={i} onClick={() => onSelect(msg.text)}>
                {msg.text}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default History;
