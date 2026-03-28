import { useState } from 'react'
import BlogList from './components/BlogList'
import CreatePost from './components/CreatePost'
import ReadPost from './components/ReadPost'

export default function App() {
  const [view, setView] = useState('list') // 'list' | 'create' | 'read'
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [refreshKey, setRefreshKey] = useState(0)

  function openPost(id) {
    setSelectedPostId(id)
    setView('read')
  }

  function goToList() {
    setView('list')
    setSelectedPostId(null)
  }

  function onPostCreated() {
    setRefreshKey((k) => k + 1)
    setView('list')
  }

  return (
    <div className="container">
      <div className="nav">
        <h1 onClick={goToList} style={{ cursor: 'pointer' }}>
          Blog
        </h1>
        {view !== 'create' && (
          <button className="btn btn-primary" onClick={() => setView('create')}>
            New Post
          </button>
        )}
      </div>

      {view === 'list' && (
        <BlogList key={refreshKey} onSelectPost={openPost} />
      )}
      {view === 'create' && (
        <CreatePost onCreated={onPostCreated} onCancel={goToList} />
      )}
      {view === 'read' && (
        <ReadPost postId={selectedPostId} onBack={goToList} />
      )}
    </div>
  )
}
