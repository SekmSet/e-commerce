import {
    GET_SHIPPING_COSTS,
} from "../_actions/ACTION_TYPES";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_SHIPPING_COSTS:
            return {...state, list: action.payload};
        default:
            return state;
    }
}
