import React from 'react';
import './CommentDetail.css';

const CommentDetail = ({ comment }) => {
  if (!comment) {
    return (
      <div className="comment-detail empty">
        <p>Select a comment to view details</p>
      </div>
    );
  }

  return (
    <div className="comment-detail">
      <div className="comment-title">
        <h3>{comment.title}</h3>
      </div>
      <div className="comment-body">
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
