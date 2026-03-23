import React from 'react'
import PostList from './components/PostList'
import { mockPosts } from './data/mockData'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Blog Posts</h1>
      </header>
      <main className="app-main">
        <PostList posts={mockPosts} />
      </main>
    </div>
  )
}

export default App