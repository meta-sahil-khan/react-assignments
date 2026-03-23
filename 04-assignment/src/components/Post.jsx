export default function Post({ title, author, date, content }) {
  return (
    <article className="post">
      <div className="post-header">
        <h2 className="post-title">{title}</h2>
        <div className="post-meta">
          <span className="post-author">by {author}</span>
          <span className="post-date">{date}</span>
        </div>
      </div>
      <p className="post-content">{content}</p>
    </article>
  )
}
