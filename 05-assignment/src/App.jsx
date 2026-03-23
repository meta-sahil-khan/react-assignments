import React, { useState } from 'react'
import CommentList from './components/CommentList'
import CommentDetail from './components/CommentDetail'
import { comments } from './data/mockData'
import './App.css'

const App = () => {
  const [selectedCommentId, setSelectedCommentId] = useState(null)

  const selectedComment = comments.find(c => c.id === selectedCommentId)

  return (
    <div className="app-container">
      <div className="layout">
        <div className="section-left">
          <CommentList 
            comments={comments}
            selectedId={selectedCommentId}
            onSelectComment={setSelectedCommentId}
          />
        </div>
        <div className="section-right">
          <CommentDetail comment={selectedComment} />
        </div>
      </div>
    </div>
  )
}

export default App