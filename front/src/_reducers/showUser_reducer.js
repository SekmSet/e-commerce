import {
    GET_SHOWUSER
} from "../_actions/ACTION_TYPES";


export default function (state = {}, action) {
    switch (action.type) {
        case GET_SHOWUSER:
            return {...state, list: action.payload};
        default:
            return state;
    }
}