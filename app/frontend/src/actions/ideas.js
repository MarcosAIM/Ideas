import axios from 'axios';

import { GET_IDEAS, DELETE_IDEA, ADD_IDEA, GET_ERROR } from './types';
import { createMessage, returnErrors } from './messages';
import { authConfig } from "./auth";

// GET IDEAS function that sends a get request to return user ideas
// uses authConfig to set request header with user token
export const getIdeas = () => (dispatch, getState ) => {
    axios.get('http://localhost:8000/api/Idea/', authConfig(getState))
        .then(res =>{ // sucessfully retrived user ideas
            dispatch({
                type: GET_IDEAS,
                payload: res.data
            });
        }).catch(err => dispatch( // error in getting ideas
            returnErrors(err.response.data,err.response.status )));

}

// DELETE IDEA function that sends a delete request, deletes ideas
// uses authConfig to set request header with user token
export const deleteIdea = (id) => (dispatch, getState ) => {
    axios.delete(`http://localhost:8000/api/Idea/${id}/`, authConfig(getState))
        .then(res =>{ // idea sucessfully deleted
            dispatch(createMessage({ ideaDeleted: 'Idea Deleted'}));
            dispatch({
                type: DELETE_IDEA,
                payload: id
            });
        }).catch(error => console.log(error)); // deletion fails log in console

}

// ADD IDEAS function sends a post request to add an idea with user token
// uses authConfig to set request header with user token
export const addIdea = (idea) => (dispatch, getState ) => {
    axios.post('http://localhost:8000/api/Idea/', idea, authConfig(getState))
        .then(res =>{ // idea added
            dispatch(createMessage({ ideaAdded: 'Idea Added'}));
            dispatch({ 
                type: ADD_IDEA,
                payload: res.data
            });
        }).catch(err => dispatch( // error in adding idea
            returnErrors(err.response.data,err.response.status )));
            
}
