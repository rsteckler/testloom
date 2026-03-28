import { useState } from 'react'
import './PostForm.css'

function PostForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    setSubmitting(true)
    setError(null)
    try {
      await onSubmit({ title: title.trim(), content: content.trim() })
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Create New Post</h2>

      {error && <p className="form-error">{error}</p>}

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        disabled={submitting}
      />

      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        placeholder="Write your post..."
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        disabled={submitting}
      />

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting || !title.trim() || !content.trim()}
        >
          {submitting ? 'Publishing...' : 'Publish'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onCancel}
          disabled={submitting}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default PostForm
