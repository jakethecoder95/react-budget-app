import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
  FORGOT_PASSWORD_RESPONSE,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  UPDATE_USER_BIO,
  UPDATE_USER_SETTINGS_SUCCESS,
  UPDATE_SETTINGS_RESET
} from "../types";

const initialValue = {
  isLoggedIn: false,
  user: {},
  signupResponse: {},
  loginResponse: {},
  forgotPasswordResponse: { msg: null }
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case LOGIN_FAILED:
      return { ...state, loginResponse: action.payload };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: { email: action.payload.email, username: action.payload.username }
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        signupResponse: { ...action.payload }
      };
    case FORGOT_PASSWORD_RESPONSE:
      return {
        ...state,
        forgotPasswordResponse: action.payload
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordWasReset: true
      };
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        passwordWasReset: false
      };
    case UPDATE_USER_BIO:
      return { ...state, user: { ...state.user, updating: true } };
    case UPDATE_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.payload.email,
          username: action.payload.username,
          updating: undefined,
          updateSuccessfull: true
        }
      };
    case UPDATE_SETTINGS_RESET:
      return {
        ...state,
        user: { email: state.user.email, username: state.user.username }
      };
    default:
      return state;
  }
};
