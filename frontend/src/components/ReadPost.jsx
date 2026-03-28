import { useState, useEffect } from 'react'
import { fetchPost } from '../api'

export default function ReadPost({ postId, onBack }) {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPost(postId)
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [postId])

  if (loading) return <div className="loading">Loading post...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <article>
      <button className="btn btn-secondary" onClick={onBack} style={{ marginBottom: '1.5rem' }}>
        &larr; Back to posts
      </button>
      <h2>{post.title}</h2>
      <div className="post-content">{post.content}</div>
    </article>
  )
}
