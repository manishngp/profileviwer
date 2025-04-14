import { useState } from 'react';
import EditUserModal from './EditUserModal';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="user-card">
      <img src={user.imageUrl} alt={user.name} className="profile-image" />
      <div className="user-info">
        <h3>{user.name}</h3>
        <p className="email">{user.email}</p>
        <p className="description">{user.description}</p>
        <div className="details">
          <p><strong>Languages:</strong> {user.languages}</p>
          <p><strong>Education:</strong> {user.education}</p>
          <p><strong>Specialization:</strong> {user.specialization}</p>
        </div>
        <div className="social-links">
          {user.twitter && (
            <a href={user.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          )}
          {user.instagram && (
            <a href={user.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
        </div>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
      {isEditing && (
        <EditUserModal user={user} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default UserCard;