import React from 'react';
import './CommentList.css';

const CommentList = ({ comments, selectedId, onSelectComment }) => {
  return (
    <div className="comment-list">
      <h2>Comment Box</h2>
      <div className="comments-container">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className={`comment-item ${selectedId === comment.id ? 'active' : ''}`}
            onClick={() => onSelectComment(comment.id)}
          >
            <span className="comment-icon">💬</span>
            <span className="comment-text">Comment {comment.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
