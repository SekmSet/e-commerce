import {
    FILTER_ARTICLES_BY_NAME,
    GET_ARTICLES,
} from "../_actions/ACTION_TYPES";

const initialState = {
    list:{},
    filteredList:{},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, list: action.payload };
        case FILTER_ARTICLES_BY_NAME:
            return { ...state, filteredList: action.payload};
        default:
            return state;
    }
}
