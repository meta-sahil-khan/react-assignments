import Post from './Post'

export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div className="no-posts">No posts available</div>
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </div>
  )
}
