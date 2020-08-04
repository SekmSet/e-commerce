import axios from "axios";
import {
    GET_PAGE_ARTICLE
} from "./ACTION_TYPES";
import { PAGE_ARTICLES_SERVER } from "../config";

export async function pageArticle() {
    const request = await axios
        .get(`${PAGE_ARTICLES_SERVER}`)
        .then((response) => response.data);
    return {
        type: GET_PAGE_ARTICLE,
        payload: request,
    };
}