import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import './TodoList.css';

const TodoList = () => {
  const { todos, toggleCompleted, deleteTodo } = useContext(TodoContext);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'active'

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length,
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h1>📝 My Todos</h1>
        <Link to="/add" className="add-todo-btn">
          ➕ Add New Todo
        </Link>
      </div>

      <div className="stats-container">
        <div className="stat">
          <span className="stat-label">Total</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Completed</span>
          <span className="stat-value completed">{stats.completed}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Active</span>
          <span className="stat-value active">{stats.active}</span>
        </div>
      </div>

      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Todos
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      {filteredTodos.length === 0 ? (
        <div className="empty-state">
          <p>
            {filter === 'all'
              ? '📭 No todos yet. Create one to get started!'
              : `No ${filter} todos. ${filter === 'active' ? 'Great job! 🎉' : 'Add one now!'}`}
          </p>
        </div>
      ) : (
        <div className="todo-list">
          {filteredTodos.map(todo => (
            <div
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <div className="todo-main">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                  className="todo-checkbox"
                />
                <div className="todo-info">
                  <p className="todo-name">{todo.name}</p>
                  <p className="todo-id">ID: {todo.id}</p>
                </div>
              </div>
              <div className="todo-actions">
                <Link
                  to={`/todo/${todo.id}`}
                  className="view-btn"
                >
                  👁️ View
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
