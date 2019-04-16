import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../types";

const initialValue = {
  isLoggedIn: false,
  signupResponse: { success: false },
  loginResponse: {}
};

const signupReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        signupResponse: { ...action.payload, success: true }
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        signupResponse: { ...action.payload, success: false }
      };
    default:
      return state;
  }
};

export default signupReducer;
