// reducers/authReducer.js
const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case "LOGIN_FAIL":
    case "SIGNUP_FAIL":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    
    default:
      return state;
  }
}
