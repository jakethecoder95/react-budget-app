import _ from "lodash";

import {
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_BIO,
  UPDATE_USER_BUDGET_SETTINGS,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_RESET
} from "../types";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const date = new Date();
const initialValue = {
  dateString: `${monthNames[date.getMonth()]} ${date.getFullYear()}`,
  budgetSettings: {
    from: {},
    to: {}
  }
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      if (action.payload.budgetSettings.from) {
        const fromArr = action.payload.budgetSettings.from.split(" ");
        action.payload.budgetSettings.from = {
          month: fromArr[0],
          year: fromArr.year
        };
        const toArr = action.payload.budgetSettings.to.split(" ");
        action.payload.budgetSettings.to = {
          month: toArr[0],
          year: toArr.year
        };
      }
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        dateString: action.payload.dateString,
        budgetSettings: {
          ...state.budgetSettings,
          ...action.payload.budgetSettings
        }
      };
    case LOGOUT:
      return {};
    case UPDATE_USER_BIO:
      return { ...state, updating: true };
    case UPDATE_USER_BUDGET_SETTINGS:
      return { ...state, updating: true };
    case UPDATE_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        updating: undefined,
        updateSuccessfull: true
      };
    case UPDATE_SETTINGS_RESET:
      return _.omit(state, ["updating", "updateSuccessfull"]);
    default:
      return state;
  }
};
