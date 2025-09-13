import { useEffect, useState } from 'react'
import { fetchPost, fetchPosts } from '../Services/post.js'
import './PostDetail.css'

export default function PostDetail({ id }) {
    const [selectedPost, setSelectedPost] = useState(null)

    useEffect(() => {
        fetchPost(id).then(data => setSelectedPost(data))
    }, [id])

    return (
        <>
            {selectedPost && <div className="detail">
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.body}</p>
            </div>}
        </>
    )
}