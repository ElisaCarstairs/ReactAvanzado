import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fetchPosts from '../Services/post.js' //Importar la función del otro archivo
import Container from '../components/Container'
import PostDetail from '../components/PostDetail'


function App() {
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    
    console.log("UseEffect ejecutado")
      fetchPosts().then((data) =>
      setPosts(data)
    
    )
  }, [])
  return (
    
    <div>
      <Container posts={posts} handleClick={handleClick} />
      {selectedPost && <PostDetail post={selectedPost} />}
      <PostDetailAlt id={selectedPostId} />
    </div>
  )
}

export default App
