import React from 'react'
import './ProfileDisplay.css'

const ProfileDisplay = ({ profile, onEdit }) => {
  return (
    <div className="profile-container">
      <h1>User Profile Details</h1>

      <div className="profile-content">
        <div className="avatar-section">
          {profile.avatarPreview ? (
            <img src={profile.avatarPreview} alt="User Avatar" className="avatar-image" />
          ) : (
            <div className="avatar-placeholder">
              <span>No Image</span>
            </div>
          )}
        </div>

        <div className="details-section">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Full Name:</label>
                <span>{profile.name}</span>
              </div>
              <div className="info-item">
                <label>Age:</label>
                <span>{profile.age}</span>
              </div>
              <div className="info-item">
                <label>Gender:</label>
                <span>{profile.gender}</span>
              </div>
              <div className="info-item">
                <label>Email:</label>
                <span>{profile.email}</span>
              </div>
              <div className="info-item">
                <label>Phone:</label>
                <span>{profile.phone}</span>
              </div>
              {profile.occupation && (
                <div className="info-item">
                  <label>Occupation:</label>
                  <span>{profile.occupation}</span>
                </div>
              )}
            </div>
          </div>

          <div className="profile-section">
            <h2>Address Information</h2>
            <div className="info-grid">
              <div className="info-item full-width">
                <label>Address:</label>
                <span>{profile.address}</span>
              </div>
              <div className="info-item">
                <label>City:</label>
                <span>{profile.city}</span>
              </div>
              <div className="info-item">
                <label>Zip Code:</label>
                <span>{profile.zipCode}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-buttons">
        <button onClick={onEdit} className="btn btn-edit">
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default ProfileDisplay
