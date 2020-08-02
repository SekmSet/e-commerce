import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  GET_USERS,
} from "./ACTION_TYPES";
import { USER_SERVER } from "../config";

export async function getUsers() {
  const request = await axios
    .get(`${USER_SERVER}`)
    .then((response) => response.data);
  return {
    type: GET_USERS,
    payload: request,
  };
}
export async function registerUser(dataToSubmit) {
  const request = await axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function loginUserTest(id) {
  const request = await axios
    .get(`${USER_SERVER}/${id}`)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: true,
    user: request,
  };
}

export function auth() {
  const request = axios
    .get(`${USER_SERVER}/auth`)
    .then((response) => response.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${USER_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function logoutUserTest() {
  return {
    type: LOGOUT_USER,
    payload: false,
  };
}