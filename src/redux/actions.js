export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  payload: user
});

export const updateUser = (user) => ({
  type: 'UPDATE_USER',
  payload: user
});

export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term
});

export const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters
});