import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fetchPosts from '../Services/post.js' //Importar la función del otro archivo

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    
    console.log("UseEffect ejecutado")
      fetchPosts().then((data) =>
      setPosts(data)
    
    )
  }, [])
  return (
    
    <>
      {posts.map((post) => 
        <p key ={post.id} >{post.title}</p>
      )}
      
    </>
  )
}

export default App
