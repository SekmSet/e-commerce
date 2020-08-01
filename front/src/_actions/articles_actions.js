import axios from "axios";
import {
GET_ARTICLES
} from "./ACTION_TYPES";
import { ARTICLES_SERVER } from "../config";

export async function getArticles() {
    const request = await axios
        .get(`${ARTICLES_SERVER}`)
        .then((response) => response.data);
    return {
        type: GET_ARTICLES,
        payload: request,
    };
}
