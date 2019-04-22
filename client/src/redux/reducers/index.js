import { combineReducers } from "redux";
import budgetReducers from "./budgetReducer";
import authReducers from "./authReducers";

export default combineReducers({
  budget: budgetReducers,
  auth: authReducers
});
