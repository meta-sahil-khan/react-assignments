import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TodoProvider } from './context/TodoContext'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoDetail from './components/TodoDetail'
import './App.css'

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<TodoForm />} />
          <Route path="/todo/:id" element={<TodoDetail />} />
        </Routes>
      </Router>
    </TodoProvider>
  )
}

export default App