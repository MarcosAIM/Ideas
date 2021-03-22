import axios from 'axios';

import { GET_IDEAS } from './types';

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
