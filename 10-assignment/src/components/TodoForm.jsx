import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import './TodoForm.css';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter a todo name');
      return;
    }

    if (name.trim().length < 3) {
      setError('Todo name must be at least 3 characters long');
      return;
    }

    addTodo(name.trim());
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="todo-form-container">
      <div className="form-card">
        <h1>✏️ Create a New Todo</h1>
        
        <form onSubmit={handleSubmit} className="todo-form">
          <div className="form-group">
            <label htmlFor="todoName">Todo Name</label>
            <input
              id="todoName"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Enter your todo..."
              className={`form-input ${error ? 'error' : ''}`}
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              ✅ Create Todo
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={handleCancel}
            >
              ❌ Cancel
            </button>
          </div>
        </form>

        <div className="form-tips">
          <h3>💡 Tips:</h3>
          <ul>
            <li>Give your todo a clear and descriptive name</li>
            <li>Minimum 3 characters required</li>
            <li>You can edit or delete todos later</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
