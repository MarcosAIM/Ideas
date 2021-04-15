import { CREATE_MESSAGE, GET_ERROR } from './types';

// CREATE_MESSAGE

export const createMessage = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};

// Return Error

export const returnErrors =(msg, status) =>{
    return{
        type: GET_ERROR,
        payload: { msg, status }
    };
};