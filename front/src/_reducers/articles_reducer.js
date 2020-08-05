import {
    GET_ARTICLES, GET_ARTICLE,
} from "../_actions/ACTION_TYPES";

const initialState = {
    list: {},
    show: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, list: action.payload };
        case GET_ARTICLE:
            return { ...state, show: action.payload };
        default:
            return state;
    }
}
