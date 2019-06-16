import {
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_BIO,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_RESET
} from "../types";

const initialValue = {
  budgetSettings: {
    from: {},
    to: {}
  }
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        budgetSettings: {
          ...state.budgetSettings,
          ...action.payload.budgetSettings
        }
      };
    case LOGOUT:
      return {};
    case UPDATE_USER_BIO:
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
      return {
        email: state.email,
        username: state.username
      };
    default:
      return state;
  }
};
