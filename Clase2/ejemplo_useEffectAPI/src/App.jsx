import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //PASO 4,, GUARDAR LOS DATOS EN UN ESTADO, primero se declara:
  const [posts, setPosts] = useState([])

  //PASO 1: PONER EL USEEFFECT
  useEffect(() => {
    // Lógica que se ejecuta al montar el componente
    console.log("UseEffect ejecutado")
    
    async function fetchData() {

      //Paso 2: Cargar datos usando fetch o axios
      const json_data = await fetch("https://jsonplaceholder.typicode.com/posts") //OBTENER EL JSON
      const data = await json_data.json() //EXTRAER EL JSON DE data y parsearlo como objeto
      console.log(data) //IMPRIMIR EL JSON EN CONSOLA

      //Paso 5: ya que se declaro el estado (state), se guardan ahí los datos
      setPosts(data)
    }

    //PASO 3: LLAMAR A LA FUNCION
    fetchData()
  }, [])
  return (
    //PASO 6: Mostrar los datos en la interfaz
    
    <>
      {posts.map((post) => 
        <p key ={post.id} >{post.title}</p>
      )}
      
    </>
  )
}

export default App
