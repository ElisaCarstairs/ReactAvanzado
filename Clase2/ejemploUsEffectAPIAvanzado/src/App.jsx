import { useEffect, useState } from 'react'
import './App.css'
import { fetchPosts, fetchPost } from '../Services/post.js'
import Container from '/components/Container.jsx'
import PostDetail from '/components/PostDetail.jsx'
import PostDetailAlt from '/components/PostDetailAlt.jsx'

function App() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts().then(data => setPosts(data))
  }, [])


  function handleClick(id) {
    fetchPost(id).then(data => setSelectedPost(data))
    setSelectedPostId(id) // Forma alterna
  }

  return (
    <div className='main'>
      <Container posts={posts} handleClick={handleClick} />
      {selectedPost && <PostDetail post={selectedPost} />}
      <PostDetailAlt id={selectedPostId} />
    </div>
  )
}

export default App