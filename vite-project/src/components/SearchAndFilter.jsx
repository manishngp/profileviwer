import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, setFilters } from '../redux/actions';
import '../styles/SearchAndFilter.css';

const SearchAndFilter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector(state => state.users);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleFilterChange = (category, value) => {
    const newFilters = {
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter(item => item !== value)
        : [...filters[category], value]
    };
    dispatch(setFilters(newFilters));
  };

  return (
    <div className="search-filter">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          onChange={handleSearchChange}
          className="search-input"
        />
        <button 
          className="filter-toggle-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {showFilters && (
        <div className="filters">
          <div className="filter-group">
            <h3>Languages</h3>
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  checked={filters.languages.includes('English')}
                  onChange={() => handleFilterChange('languages', 'English')}
                /> English
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.languages.includes('Hindi')}
                  onChange={() => handleFilterChange('languages', 'Hindi')}
                /> Hindi
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.languages.includes('Spanish')}
                  onChange={() => handleFilterChange('languages', 'Spanish')}
                /> Spanish
              </label>
            </div>
          </div>

          <div className="filter-group">
            <h3>Education</h3>
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  checked={filters.education.includes('B.Sc.')}
                  onChange={() => handleFilterChange('education', 'B.Sc.')}
                /> B.Sc.
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.education.includes('M.Sc.')}
                  onChange={() => handleFilterChange('education', 'M.Sc.')}
                /> M.Sc.
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.education.includes('Ph.D.')}
                  onChange={() => handleFilterChange('education', 'Ph.D.')}
                /> Ph.D.
              </label>
            </div>
          </div>

          <div className="filter-group">
            <h3>Specialization</h3>
            <div className="filter-options">
              <label>
                <input
                  type="checkbox"
                  checked={filters.specialization.includes('Tech Reviews')}
                  onChange={() => handleFilterChange('specialization', 'Tech Reviews')}
                /> Tech Reviews
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.specialization.includes('Web Development')}
                  onChange={() => handleFilterChange('specialization', 'Web Development')}
                /> Web Development
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={filters.specialization.includes('Data Science')}
                  onChange={() => handleFilterChange('specialization', 'Data Science')}
                /> Data Science
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;