import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  LOGOUT,
  FORGOT_PASSWORD_RESPONSE
} from "../types";

const initialValue = {
  isLoggedIn: false,
  signupResponse: {},
  loginResponse: {}
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
        isLoggedIn: true
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
    default:
      return state;
  }
};
