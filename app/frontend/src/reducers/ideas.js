import { GET_IDEAS } from '../actions/types.js';

const initialState = {
    ideas: []
}

export default (state= initialState, action)=>{
    switch(action.type){
        case GET_IDEAS:
            return {
                ...state,
                ideas: action.payload
            };
        default:
            return state;
    }
}