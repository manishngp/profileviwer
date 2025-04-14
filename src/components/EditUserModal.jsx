import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions';
import '../styles/EditUserModal.css';

const EditUserModal = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            readOnly
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
          <input
            type="url"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
          <input
            type="url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <div className="modal-buttons">
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;