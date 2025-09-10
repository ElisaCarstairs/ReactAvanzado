import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const mockMessages = [
  {text: "Hola", sender : "user"},
  {text: "Hola, ¿En qué te puedo ayudar?", sender: "LLM"},
  {text: "Quiero que me digas como programar mejor", sender : "user"},
  {text: "Para programar mejor, puedes ", sender: "LLM"}
]

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(mockMessages)

  function sendMessage (){
    console.log("Enviando mensaje", input)


    /* Aqui se lee el input y se agrega a los mensajes, al final de la lista *Estaba dentro de un setTimeout
    const messages_original = [...messages]
      const new_messages = {text: input, sender: 'user'}
      new_messages.push(new_messages)
      setMessages(new_messages)
      setInput('')
    */
    // Otra forma de agregar el mensaje al final
    setMessages((prev) => [...prev, {text: input, sender: 'user'}])

    setTimeout(() => {
      setMessages((prev) => [...prev, {text: "Este es un mensaje de la LLM", sender: 'LLM'}])
    }, 1000);
    
    
  }

  return (
    <>
      <div>
        {messages.map((message, i) => (
          <p
            key={i}
            style={message.sender === 'user'? {color: 'blue'}: {color: 'red'}}
            >
              {message.text}
              </p>
          ))}
      </div>
      <input onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}> Enviar </button>
    </>
    
  )
}

export default App
