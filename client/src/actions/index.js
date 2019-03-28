import {
  ADD_INCOME_ITEM,
  ADD_EXPENSE_ITEM,
  DELETE_INCOME_ITEM,
  DELETE_EXPENSE_ITEM
} from "./types";

export const addItem = item => {
  if (item.type === "inc") {
    return { type: ADD_INCOME_ITEM, payload: item };
  } else {
    return { type: ADD_EXPENSE_ITEM, payload: item };
  }
};

export const deleteItem = item => {
  if (item.type === "inc") {
    return { type: DELETE_INCOME_ITEM, payload: item };
  } else {
    return { type: DELETE_EXPENSE_ITEM, payload: item };
  }
};
