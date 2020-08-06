import {
    FILTER_ARTICLES_BY_NAME, 
    GET_ARTICLE,
    GET_ARTICLES,
    GET_ARTICLE_COMMENTS,
} from "../_actions/ACTION_TYPES";

const initialState = {
    list:{},
    show:{},
    filteredList:{},
    comment:{},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return { ...state, list: action.payload };
        case GET_ARTICLE:
            return { ...state, show: action.payload };
        case GET_ARTICLE_COMMENTS:
            return { ...state, comment: action.payload };
        case FILTER_ARTICLES_BY_NAME:
            return { ...state, filteredList: action.payload};
        default:
            return state;
    }
}
