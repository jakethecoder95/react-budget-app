import { ADD_INCOME_ITEM, ADD_EXPENSE_ITEM } from "../actions/types";

const INITIAL_STATE = {
  incomeItems: null,
  expenseItems: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INCOME_ITEM:
      return {
        ...state,
        incomeItems: {
          ...state.incomeItems,
          [action.payload.id]: action.payload
        }
      };
    case ADD_EXPENSE_ITEM:
      return {
        ...state,
        expenseItems: {
          ...state.expenseItems,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};
