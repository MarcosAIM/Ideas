import { CREATE_MESSAGE } from '../actions/types';

const initState = {};

export default function(state=initState, action){
    switch(action.type){
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}