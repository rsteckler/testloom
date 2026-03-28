import { useState, useEffect, useCallback } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostView from './components/PostView'
import './App.css'

const API_URL = 'http://localhost:3001/api/posts'

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`Failed to fetch posts (${res.status})`)
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleCreatePost = async (post) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    if (!res.ok) throw new Error(`Failed to create post (${res.status})`)
    setShowForm(false)
    await fetchPosts()
  }

  if (selectedPost) {
    return (
      <div className="app">
        <PostView post={selectedPost} onBack={() => setSelectedPost(null)} />
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Blog</h1>
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : '+ New Post'}
        </button>
      </header>

      {showForm && (
        <PostForm
          onSubmit={handleCreatePost}
          onCancel={() => setShowForm(false)}
        />
      )}

      {error && (
        <div className="error-banner">
          <p>{error}</p>
          <button className="btn btn-small" onClick={fetchPosts}>
            Retry
          </button>
        </div>
      )}

      {loading ? (
        <p className="loading">Loading posts...</p>
      ) : (
        <PostList posts={posts} onSelect={setSelectedPost} />
      )}
    </div>
  )
}

export default App
