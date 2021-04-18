import axios from 'axios';

import { GET_IDEAS, DELETE_IDEA, ADD_IDEA, GET_ERROR } from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from "./auth";

// GET IDEAS
export const getIdeas = () => (dispatch, getState ) => {
    axios.get('http://localhost:8000/api/Idea/', tokenConfig(getState))
        .then(res =>{
            dispatch({
                type: GET_IDEAS,
                payload: res.data
            });
        }).catch(err => dispatch(
            returnErrors(err.response.data,err.response.status )));

}

// DELETE IDEA
export const deleteIdea = (id) => (dispatch, getState ) => {
    axios.delete(`http://localhost:8000/api/Idea/${id}/`, tokenConfig(getState))
        .then(res =>{
            dispatch(createMessage({ ideaDeleted: 'Idea Deleted'}));
            dispatch({
                type: DELETE_IDEA,
                payload: id
            });
        }).catch(error => console.log(error));

}

// ADD IDEAS
export const addIdea = (idea) => (dispatch, getState ) => {
    axios.post('http://localhost:8000/api/Idea/', idea, tokenConfig(getState))
        .then(res =>{
            dispatch(createMessage({ ideaAdded: 'Idea Added'}));
            dispatch({
                type: ADD_IDEA,
                payload: res.data
            });
        }).catch(err => dispatch(
            returnErrors(err.response.data,err.response.status )));

}
