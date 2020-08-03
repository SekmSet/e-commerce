import {
    GET_ARTICLES,
} from "../_actions/ACTION_TYPES";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}