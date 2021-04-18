import { CREATE_MESSAGE, GET_ERROR } from './types';

// CREATE_MESSAGE function is used to create a message to display
export const createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// Return Error function is used to return an error with status
export const returnErrors =(msg, status) =>{
    return{
        type: GET_ERROR,
        payload: { msg, status }
    };
};