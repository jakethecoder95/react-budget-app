import { combineReducers } from "redux";
import budgetReducers from "./budgetReducer";

export default combineReducers({
  budget: budgetReducers
});
