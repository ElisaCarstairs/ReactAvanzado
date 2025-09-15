import { useState } from 'react'
import './App.css'

// 🔹 Versión inicial: mensajes simulados
const mockMessages = [
  { text: "Hola", sender: "user" },
  { text: "Hola, ¿En qué te puedo ayudar?", sender: "LLM" },
  { text: "Quiero que me digas como programar mejor", sender: "user" },
  { text: "Para programar mejor, puedes ", sender: "LLM" }
]

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  async function sendMessage() {
    console.log("Enviando mensaje", input)

    /* 🔹 PRIMER INTENTO:
       Se intentó clonar los mensajes, pero se cometió un error:
       new_messages.push(new_messages) se empujaba a sí mismo.
       Lo dejamos como referencia.
       
    const messages_original = [...messages]
    const new_messages = { text: input, sender: 'user' }
    new_messages.push(new_messages)
    setMessages(new_messages)
    setInput('')
    */

    // 🔹 VERSIÓN 2: forma correcta de agregar el mensaje al final
    setMessages((prev) => [...prev, { text: input, sender: 'user' }])

    /* 🔹 VERSIÓN 3: Simulación con setTimeout
       Esto se usó como placeholder antes de integrar Ollama
       
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Este es un mensaje de la LLM", sender: 'LLM' }
      ])
    }, 1000)
    */

    // 🔹 VERSIÓN 4: Integración real con Ollama API
    try {
      const res = await fetch("http://localhost:11434/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "deepseek-r1:1.5b", // 👈 ajusta aquí el modelo que quieras usar
          stream: false,
          messages: [{ role: "user", content: input }]
        })
      })

      const data = await res.json()
      const responseText = data.choices[0].message.content

      setMessages(prev => [...prev, { text: responseText, sender: "LLM" }])
    } catch (err) {
      console.error("Error con Ollama:", err)
      setMessages(prev => [...prev, { text: "Error al conectar con LLM", sender: "LLM" }])
    }

    setInput('')
  }

  
return (
  <>
    <div className="chat-box">
      {messages.map((message, i) => (
        <p
          key={i}
          className={message.sender === 'user' ? 'user' : 'LLM'}
        >
          {message.text}
        </p>
      ))}
    </div>

    {/* Form para input y botón, para que se estilicen juntos */}
    <form
      onSubmit={e => {
        e.preventDefault();
        sendMessage();
      }}
      style={{ display: 'flex', gap: '10px', maxWidth: '600px', margin: '0 auto 20px' }}
    >
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button type="submit">Enviar</button>
    </form>
  </>
)

}

export default App
