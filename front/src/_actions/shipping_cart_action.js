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

export async function removeFromCart({id}){
    return {
        type: REMOVE_FROM_CART,
        id,
    };
}

export async function subtractQuantity({id}){
    return {
        type: SUB_QUANTITY,
        id,
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