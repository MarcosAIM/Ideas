import  axios  from "axios";
import { returnErrors } from "./messages";
import { USER_LOADING, USER_LOADED, 
         AUTH_ERROR, LOGIN_SUCCESS, 
         LOGIN_FAIL, LOGOUT_SUCCESS, 
         REGISTER_SUCCESS, REGISTER_FAIL } from "./types";


// Loads User sends a get request    
// dispatch USER_LOADED and user data on sucess
// dispatch AUTH_ERROR and the error data on failure
// uses authConfig
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING }); // dipatch that current user is loading
    // send get request with token
    axios.get('http://localhost:8000/api/auth/thinker', authConfig(getState))
        .then(res => { // User Loads
            dispatch({
                type: USER_LOADED, 
                payload: res.data
            });
        }).catch(err =>{ // User fails to load
            dispatch(
                returnErrors(err.response.data, err.response.status)
            );
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// Registers User sends a post request  gets a token
// dispatch REGISTER_SUCCESS and user token on sucess
// dispatch REGISTER_FAIL and the error data on failure  
export const registerUser = ({username, email, date_of_birth, password}) => (dispatch) => {
    // Request Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Request Body
    const body = JSON.stringify({ username, email, date_of_birth, password });

    axios.post('http://localhost:8000/api/auth/register', body, config)
        .then(res => {
            dispatch({ // register successs
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err =>{ // register fails
            dispatch(
                returnErrors(err.response.data, err.response.status)
            );
            dispatch({
                type: REGISTER_FAIL
            });
        });
};


// Log in User sends a post request gets a token
// dispatch LOGIN_SUCCESS and user token on sucess
// dispatch LOGIN_FAIL and the error data on failure  
export const loginUser = (username, password) => (dispatch) => {
    // Request Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Request Body
    const body = JSON.stringify({ username, password });

    axios.post('http://localhost:8000/api/auth/login', body, config)
        .then(res => {
            dispatch({ // login sucess
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err =>{ // login fail
            dispatch(
                returnErrors(err.response.data, err.response.status)
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

// Logs out user sends a post request with the token
// dispatch LOGOUT_SUCCESS on sucess
// dispatch the error data on failure
// uses authConfig
export const logoutUser = () => (dispatch, getState) => {
    axios.post('http://localhost:8000/api/auth/logout/', null, authConfig(getState))
        .then(res => { // logout success
            dispatch({ 
                type: LOGOUT_SUCCESS,
            });
        }).catch(err =>{  // logout fails
            dispatch(
                returnErrors(err.response.data, err.response.status)
            );
        });
};



// function that returns an object config with the header Content-Type and token set
// helper function used to build a config object with header Content-Type and token
// to send as a request header parameter
export const authConfig = getState => {
    const token = getState().auth.token; //get current token from the auth state

    const config = {
        headers: {
            'Content-Type': 'application/json' //set Content-Type to Json
        }
    }

    if(token) { // if token is set in State
        config.headers['Authorization'] = `Token ${token}`; // set Authorization to Token {token}
    }

    return config;
};