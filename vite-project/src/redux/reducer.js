const initialState = {
  users: [],
  searchTerm: '',
  filters: {
    languages: [],
    education: [],
    specialization: []
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => 
          user.email === action.payload.email ? action.payload : user
        )
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;