import axios from "axios";
import {
    EMPTY_CART,
    SUB_QUANTITY,
    ADD_QUANTITY,
    REMOVE_FROM_CART,
    ADD_TO_CART,

} from "./ACTION_TYPES";
import {BASKET_ARTICLES} from "../config";


export function addToCart({article}){
        return {
            type: ADD_TO_CART,
            article
        };
}

export function removeFromCart({article}){
    return {
        type: REMOVE_FROM_CART,
        article,
    };
}

export function subtractQuantity({article}){
    return {
        type: SUB_QUANTITY,
        article,
    };
}

export async function addQuantity({id}){
    const request = await axios
        .get(`${BASKET_ARTICLES}`)
        .then((response) => response.data);
    return {
        type: ADD_QUANTITY,
        payload: request,
        id,
    };
}

export async function emptyCart(){
    return {
        type: EMPTY_CART,
    };
}