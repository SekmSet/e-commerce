import {
    GET_PAGE_ARTICLE,
} from "../_actions/ACTION_TYPES";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_PAGE_ARTICLE:
            return { ...state, list: action.payload };
        default:
            return state;
    }
}