import Post from './Post.jsx'
import './Container.css'
export default function Container({ posts, handleClick }) {
    return (
        <div className='container'>
            {posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />)}
        </div>
    )
}