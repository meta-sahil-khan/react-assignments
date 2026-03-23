import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import './TodoDetail.css';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTodoById, updateTodo, deleteTodo, toggleCompleted } = useContext(TodoContext);
  
  const todo = getTodoById(id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todo?.name || '');
  const [error, setError] = useState('');

  if (!todo) {
    return (
      <div className="todo-detail-container">
        <div className="not-found">
          <h2>❌ Todo not found!</h2>
          <p>The todo you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/')} className="back-btn">
            ← Back to Todos
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    if (!editedName.trim()) {
      setError('Please enter a todo name');
      return;
    }

    if (editedName.trim().length < 3) {
      setError('Todo name must be at least 3 characters long');
      return;
    }

    updateTodo(todo.id, { name: editedName.trim() });
    setIsEditing(false);
    setError('');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      deleteTodo(todo.id);
      navigate('/');
    }
  };

  const handleCancel = () => {
    setEditedName(todo.name);
    setIsEditing(false);
    setError('');
  };

  const completedDate = new Date().toLocaleDateString();

  return (
    <div className="todo-detail-container">
      <button onClick={() => navigate('/')} className="back-btn">
        ← Back to Todos
      </button>

      <div className="detail-card">
        <div className="detail-header">
          <h1>📌 Todo Details</h1>
          <span className={`status-badge ${todo.completed ? 'completed' : 'active'}`}>
            {todo.completed ? '✅ Completed' : '⏳ Active'}
          </span>
        </div>

        <div className="detail-content">
          {isEditing ? (
            <div className="edit-mode">
              <div className="form-group">
                <label htmlFor="editTodo">Todo Name</label>
                <input
                  id="editTodo"
                  type="text"
                  value={editedName}
                  onChange={(e) => {
                    setEditedName(e.target.value);
                    setError('');
                  }}
                  className={`form-input ${error ? 'error' : ''}`}
                />
                {error && <span className="error-message">{error}</span>}
              </div>
              <div className="edit-actions">
                <button onClick={handleSave} className="save-btn">
                  💾 Save Changes
                </button>
                <button onClick={handleCancel} className="cancel-btn">
                  ✖️ Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="detail-info">
                <div className="info-item">
                  <span className="info-label">ID:</span>
                  <span className="info-value">{todo.id}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{todo.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status:</span>
                  <span className={`info-value status ${todo.completed ? 'completed' : 'active'}`}>
                    {todo.completed ? 'Completed' : 'Active'}
                  </span>
                </div>
              </div>

              <div className="detail-actions">
                <button
                  onClick={() => toggleCompleted(todo.id)}
                  className={`toggle-btn ${todo.completed ? 'active' : ''}`}
                >
                  {todo.completed ? '↩️ Mark as Active' : '✔️ Mark as Complete'}
                </button>
                <button
                  onClick={() => setIsEditing(true)}
                  className="edit-btn"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="delete-btn"
                >
                  🗑️ Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
