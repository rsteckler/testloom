import { useState, useEffect } from 'react'
import { fetchPosts } from '../api'

export default function BlogList({ onSelectPost }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="loading">Loading posts...</div>
  if (error) return <div className="error">{error}</div>
  if (posts.length === 0) return <div className="empty">No posts yet. Create your first one!</div>

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.id} className="post-item" onClick={() => onSelectPost(post.id)}>
          <h3>{post.title}</h3>
        </li>
      ))}
    </ul>
  )
}
