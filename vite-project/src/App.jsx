import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from './redux/actions';
import useLocalStorage from './hooks/useLocalStorage';
import AddUserForm from './components/AddUserForm';
import UserCard from './components/UserCard';
import SearchAndFilter from './components/SearchAndFilter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [showAddForm, setShowAddForm] = useState(false);
  const [storedUsers, setStoredUsers] = useLocalStorage('users', []);
  const { users, searchTerm, filters } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(setUsers(storedUsers));
  }, []);

 
  useEffect(() => {
    if (users.length > 0) {
      setStoredUsers(users);
    }
  }, [users, setStoredUsers]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.specialization.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilters =
      (filters.languages.length === 0 || filters.languages.some(lang => user.languages.includes(lang))) &&
      (filters.education.length === 0 || filters.education.includes(user.education)) &&
      (filters.specialization.length === 0 || filters.specialization.includes(user.specialization));

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="app">
      <h1>User Profile Management</h1>
      <button onClick={() => setShowAddForm(true)} className="add-user-button">
        Add User
      </button>
      <SearchAndFilter />
      {showAddForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AddUserForm onClose={() => setShowAddForm(false)} />
          </div>
        </div>
      )}
      <div className="user-grid">
        {filteredUsers.map(user => (
          <UserCard key={user.email} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
