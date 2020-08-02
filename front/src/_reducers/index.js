import { combineReducers } from "redux";
import user from "./user_reducer";
import shippingCosts from "./shipping_cost_reducer";

const allReducers = combineReducers({
  user,
  shippingCosts,
});
export default allReducers;
