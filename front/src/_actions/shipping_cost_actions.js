import axios from "axios";
import {
    GET_SHIPPING_COSTS,
} from "./ACTION_TYPES";
import { SHIPPING_COST_SERVER } from "../config";

export async function getShippingCosts() {
    const request = await axios
        .get(`${SHIPPING_COST_SERVER}`)
        .then(response => response.data);

    return {
        type: GET_SHIPPING_COSTS,
        payload: request,
    };
}