import './PostView.css'

function PostView({ post, onBack }) {
  return (
    <article className="post-view">
      <button className="btn btn-secondary back-btn" onClick={onBack}>
        &larr; Back to posts
      </button>

      <h1 className="post-view-title">{post.title}</h1>

      {post.createdAt && (
        <time className="post-view-date">
          {new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      )}

      <div className="post-view-content">
        {post.content.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}

export default PostView
