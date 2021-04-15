import axios from 'axios';

import { GET_IDEAS, DELETE_IDEA, ADD_IDEA, GET_ERROR } from './types';
import { createMessage, returnErrors } from './messages';

// GET IDEAS
export const getIdeas = () => dispatch => {
    axios.get('http://localhost:8000/api/Idea/')
        .then(res =>{
            dispatch({
                type: GET_IDEAS,
                payload: res.data
            });
        }).catch(err => dispatch(
            returnErrors(err.response.data,err.response.status )));

}

// DELETE IDEA
export const deleteIdea = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/Idea/${id}/`)
        .then(res =>{
            dispatch(createMessage({ ideaDeleted: 'Idea Deleted'}));
            dispatch({
                type: DELETE_IDEA,
                payload: id
            });
        }).catch(error => console.log(error));

}

// ADD IDEAS
export const addIdea = (idea) => dispatch => {
    axios.post('http://localhost:8000/api/Idea/', idea)
        .then(res =>{
            dispatch(createMessage({ ideaAdded: 'Idea Added'}));
            dispatch({
                type: ADD_IDEA,
                payload: res.data
            });
        }).catch(err => dispatch(
            returnErrors(err.response.data,err.response.status )));

}
