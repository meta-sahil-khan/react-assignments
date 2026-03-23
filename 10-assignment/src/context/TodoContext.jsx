import React, { createContext, useState, useCallback } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Learn React', completed: false },
    { id: 2, name: 'Build a Todo App', completed: true },
    { id: 3, name: 'Master React Router', completed: false },
    { id: 4, name: 'Deploy the app', completed: false },
  ]);

  const addTodo = useCallback((name) => {
    const newTodo = {
      id: Math.max(...todos.map(t => t.id), 0) + 1,
      name,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
    return newTodo.id;
  }, [todos]);

  const updateTodo = useCallback((id, updatedData) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, ...updatedData } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const toggleCompleted = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const getTodoById = useCallback((id) => {
    return todos.find(todo => todo.id === parseInt(id));
  }, [todos]);

  const value = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleCompleted,
    getTodoById,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
