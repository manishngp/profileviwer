import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';
import '../styles/AddUserForm.css';

const AddUserForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    languages: '',
    education: '',
    specialization: '',
    twitter: '',
    instagram: '',
    imageUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="languages"
        placeholder="Languages (comma-separated)"
        value={formData.languages}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="specialization"
        placeholder="Specialization"
        value={formData.specialization}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="twitter"
        placeholder="Twitter URL"
        value={formData.twitter}
        onChange={handleChange}
      />
      <input
        type="url"
        name="instagram"
        placeholder="Instagram URL"
        value={formData.instagram}
        onChange={handleChange}
      />
      <input
        type="url"
        name="imageUrl"
        placeholder="Profile Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        required
      />
      <div className="form-buttons">
        <button type="submit">Add User</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default AddUserForm;