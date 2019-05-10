import { combineReducers } from "redux";
import budgetReducers from "./budgetReducer";
import authReducers from "./authReducers";
import modalsReducers from "./modalsReducers";

export default combineReducers({
  budget: budgetReducers,
  auth: authReducers,
  modals: modalsReducers
});
