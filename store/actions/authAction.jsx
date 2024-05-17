// actions/authActions.js
import axios from 'axios';

export const login = (userData, navigate) => async (dispatch) => {
  
  try {
    const res = await axios.post('https://stage642.devdesignbuild.com/api/auth/login', userData);
    // console.log('Login response:', res.data.token.access_token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    localStorage.setItem('token', res.data.token.access_token);
    navigate('/home'); 
 
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL', payload: err.response.data });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const res = await axios.post('https://stage642.devdesignbuild.com/api/auth/register', userData);
    // console.log('signup response:', res.data);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: res.data });
    navigate('/'); 
  } catch (err) {
    dispatch({ type: 'SIGNUP_FAIL', payload: err.response.data });
  }
};


