import axios from "axios";
import {
    GET_ARTICLE,
    GET_ARTICLES,
    FILTER_ARTICLES_BY_NAME,
} from "./ACTION_TYPES";
import {ARTICLES_SERVER} from "../config";

export async function getArticles() {
    const request = await axios
        .get(`${ARTICLES_SERVER}`)
        .then((response) => response.data);
    return {
        type: GET_ARTICLES,
        payload: request,
    };
}
export async function filterArticles(name) {
    const request = await axios
        .get(`${ARTICLES_SERVER}?name=${name}`)
        .then((response) => response.data);
    return {
        type: FILTER_ARTICLES_BY_NAME,
        payload: request
    };
}

export async function getArticle({id}) {
    const request = await axios
        .get(`${ARTICLES_SERVER}/${id}`)
        .then((response) => response.data);
    return {
        type: GET_ARTICLE,
        payload: request,
    };
}
