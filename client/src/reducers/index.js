import { combineReducers } from "redux";
import addItemReducer from "./addItemReducer";

export default combineReducers({
  items: addItemReducer
});
