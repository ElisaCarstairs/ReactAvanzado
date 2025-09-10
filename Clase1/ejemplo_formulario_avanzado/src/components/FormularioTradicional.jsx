import { useState } from 'react'
export default function FormularioTradicional() {

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    function handleSubmitRegularForm(e) {
        e.preventDefault()
        console.log({name, lastname}) 
        // o
        console.log('Usando target: ${e.target.name.value} ${e.target.lastname.value}')

    }
  return (
    <>
        <h2>Formulario normal:</h2>
        <form onSubmit={handleSubmitRegularForm}>
            Name: <input name='name' onChange={(e) => setName(e.target.value)}/>
            <br />
            Last name: <input name='lastname' onChange={(e) => setLastname(e.target.value)}/>
            <br />
            <input type="submit" value="Enviar" />
        </form>
    </>
  )
}