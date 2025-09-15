// src/hooks/useOllama.js
import { useState } from "react";

export function useOllama(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userText) => {
    if (!userText) return;

    const userMessage = { sender: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);
    setError(null);

    try {
      const ollamaMessages = [...messages, userMessage].map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }));

      const res = await fetch("http://localhost:11434/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b",
          stream: false,
          messages: ollamaMessages,
        }),
      });

      const data = await res.json();
      const llmText = data.choices?.[0]?.message?.content || "⚠️ No hubo respuesta";

      setMessages((prev) => [...prev, { sender: "LLM", text: llmText }]);
    } catch (err) {
      console.error("Error con Ollama:", err);
      setError("Error al conectar con LLM");
      setMessages((prev) => [...prev, { sender: "LLM", text: "Error al conectar con LLM" }]);
    } finally {
      setLoading(false);
    }
  };

  return { messages, sendMessage, loading, error };
}
