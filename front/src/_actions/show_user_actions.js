import axios from "axios";
import {GET_SHOWUSER} from "./ACTION_TYPES";
import {SHOWUSER_SERVER} from "../config";

export async function getShowUser() {
    const request = await axios
        .get(`${SHOWUSER_SERVER}`)
        .then((response) => response.data);
    return {
        type: GET_SHOWUSER,
        payload: request,
    };
}
