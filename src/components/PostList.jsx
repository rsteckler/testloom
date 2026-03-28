import './PostList.css'

function PostList({ posts, onSelect }) {
  if (posts.length === 0) {
    return (
      <div className="empty-state">
        <p>No posts yet. Create your first blog post!</p>
      </div>
    )
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <article
          key={post.id}
          className="post-card"
          onClick={() => onSelect(post)}
        >
          <h2 className="post-card-title">{post.title}</h2>
          <p className="post-card-preview">
            {post.content.length > 150
              ? post.content.slice(0, 150) + '...'
              : post.content}
          </p>
          {post.createdAt && (
            <time className="post-card-date">
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </article>
      ))}
    </div>
  )
}

export default PostList
