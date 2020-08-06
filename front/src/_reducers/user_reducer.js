import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  GET_USERS,
} from "../_actions/ACTION_TYPES";

const token = window.localStorage.getItem('token');

const initialState = {
  //  loginSucces: token ? true: false,
  loginSucces: !!token,
  token,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      window.localStorage.setItem('token', action.token);
      window.localStorage.setItem('refresh_token', action.refresh_token);
      return { ...state, loginSucces: action.payload, token: action.token };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('refresh_token');
      return { ...state, loginSucces: action.payload, token: null };
    case GET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
