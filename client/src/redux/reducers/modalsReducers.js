import {
  MERGE_BUDGET_CONFIRM,
  MERGE_BUDGET_NO,
  MERGE_BUDGET_YES
} from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case MERGE_BUDGET_CONFIRM:
      return { ...state, showModal: true, mergeBudgetConfirm: true };
    case MERGE_BUDGET_YES:
      return { ...state, showModal: false, mergeBudgetConfirm: false };
    case MERGE_BUDGET_NO:
      return { ...state, showModal: false, mergeBudgetConfirm: false };
    default:
      return state;
  }
};
