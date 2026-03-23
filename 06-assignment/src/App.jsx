import React, { useState } from 'react'
import UserProfileForm from './components/UserProfileForm'
import ProfileDisplay from './components/ProfileDisplay'
import './App.css'

const App = () => {
  const [userProfile, setUserProfile] = useState(null)
  const [showForm, setShowForm] = useState(true)

  const handleFormSubmit = (formData) => {
    setUserProfile(formData)
    setShowForm(false)
  }

  const handleEditProfile = () => {
    setShowForm(true)
  }

  return (
    <div className="app-container">
      {showForm ? (
        <UserProfileForm onSubmit={handleFormSubmit} />
      ) : (
        <ProfileDisplay profile={userProfile} onEdit={handleEditProfile} />
      )}
    </div>
  )
}

export default App