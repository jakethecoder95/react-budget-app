import _ from "lodash";
import {
  ADD_INCOME_ITEM,
  ADD_EXPENSE_ITEM,
  CLEAR_BUDGET,
  DELETE_INCOME_ITEM,
  DELETE_EXPENSE_ITEM,
  SET_INITIAL_BUDGET
} from "../types";

const INITIAL_STATE = {
  totalIncome: 0,
  totalExpenses: 0,
  items: {
    incomeItems: {},
    expenseItems: {}
  },
  catagoryTotals: {
    misc: 0,
    home: 0,
    transport: 0,
    groceries: 0,
    insurance: 0,
    dining: 0,
    entertainment: 0
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INITIAL_BUDGET:
      const budget = action.payload;
      return { ...budget };
    case ADD_INCOME_ITEM:
      return {
        ...state,
        totalIncome: state.totalIncome + action.payload.value,
        items: {
          ...state.items,
          incomeItems: {
            ...state.items.incomeItems,
            [action.payload._id]: action.payload
          }
        }
      };
    case ADD_EXPENSE_ITEM:
      return {
        ...state,
        totalExpenses: state.totalExpenses + action.payload.value,
        catagoryTotals: {
          ...state.catagoryTotals,
          [action.payload.catagory]:
            state.catagoryTotals[action.payload.catagory] + action.payload.value
        },
        items: {
          ...state.items,
          expenseItems: {
            ...state.items.expenseItems,
            [action.payload._id]: action.payload
          }
        }
      };
    case DELETE_INCOME_ITEM:
      return {
        ...state,
        totalIncome: state.totalIncome - action.payload.value,
        items: {
          ...state.items,
          incomeItems: _.omit(state.items.incomeItems, action.payload._id)
        }
      };
    case DELETE_EXPENSE_ITEM:
      return {
        ...state,
        totalExpenses: state.totalExpenses - action.payload.value,
        catagoryTotals: {
          ...state.catagoryTotals,
          [action.payload.catagory]:
            state.catagoryTotals[action.payload.catagory] - action.payload.value
        },
        items: {
          ...state.items,
          expenseItems: _.omit(state.items.expenseItems, action.payload._id)
        }
      };
    case CLEAR_BUDGET:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
