import { combineReducers } from "redux";
import user from "./user_reducer";
import shippingCosts from "./shipping_cost_reducer";
import articles from "./articles_reducer";
import shippingCart from "./shipping_cart_reducer";
import removeFromCart from "./shipping_cart_reducer";
import showUser from "./showUser_reducer";


const allReducers = combineReducers({
  user,
  shippingCosts,
  articles,
  showUser,
  shippingCart,
  removeFromCart,
});
export default allReducers;
