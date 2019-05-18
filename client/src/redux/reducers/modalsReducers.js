import {
  MERGE_BUDGET_CONFIRM,
  MERGE_BUDGET_NO,
  MERGE_BUDGET_YES,
  MOBILE_MENU_SHOW,
  MOBILE_MENU_CLOSE
} from "../types";

export default (state = {}, action) => {
  switch (action.type) {
    case MOBILE_MENU_SHOW:
      return { ...state, showMobileMenu: true };
    case MOBILE_MENU_CLOSE:
      return { ...state, showMobileMenu: false };
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
