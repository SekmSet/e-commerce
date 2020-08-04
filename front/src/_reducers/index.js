import { combineReducers } from "redux";
import user from "./user_reducer";
import shippingCosts from "./shipping_cost_reducer";
import article from "./pageArticle_reducer";
import articles from "./articles_reducer";

const allReducers = combineReducers({
  user,
  shippingCosts,
  articles,
  article,
});
export default allReducers;
