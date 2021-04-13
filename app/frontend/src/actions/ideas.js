import axios from 'axios';

import { GET_IDEAS, DELETE_IDEA, ADD_IDEA, GET_ERROR } from './types';

// GET IDEAS
export const getIdeas = () => dispatch => {
    axios.get('http://localhost:8000/api/Idea/')
        .then(res =>{
            dispatch({
                type: GET_IDEAS,
                payload: res.data
            });
        }).catch(error => console.log(error));

}

// DELETE IDEA
export const deleteIdea = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/Idea/${id}/`)
        .then(res =>{
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
            dispatch({
                type: ADD_IDEA,
                payload: res.data
            });
        }).catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch({
                type: GET_ERROR,
                payload: error
            })
        });

}
