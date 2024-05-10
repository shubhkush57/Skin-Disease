import {
    IMAGE_SENT,
    GET_PREDICATION,
} from '../actions/types';

const initialState = {
    image: null,
    predication: null
};
export default function(state = initialState, action){
    const {type,payload} = action;
    switch(type){
        case IMAGE_SENT:
            return {
                ...state,
                image: payload
            }
        case GET_PREDICATION:
            return {
                ...state,
                prediction: payload
            }
        default:
            return state;
    }
}