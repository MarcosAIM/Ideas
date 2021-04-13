import { GET_IDEAS, DELETE_IDEA, ADD_IDEA } from '../actions/types.js';

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

        case ADD_IDEA:
            return {
                ...state,
                ideas: [...state.ideas, action.payload]
            };
            
        case DELETE_IDEA:
            return {
                ...state,
                ideas: state.ideas.filter(idea => idea.id !== action.payload)
            };

        default:
            return state;
    }
}