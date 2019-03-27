import { ADD_INCOME_ITEM, ADD_EXPENSE_ITEM } from "./types";

export const addItem = item => {
  if (item.type === "inc") {
    return { type: ADD_INCOME_ITEM, payload: item };
  } else {
    return { type: ADD_EXPENSE_ITEM, payload: item };
  }
};
