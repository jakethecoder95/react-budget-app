import { takeLatest, put, call } from "redux-saga/effects";
import store from "store";
import {
  putSignup,
  postLogin,
  postForgotPassword,
  postResetPassword
} from "../../apis/server";

import {
  CLEAR_BUDGET,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_RESPONSE,
  LOGOUT,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  SIGNUP,
  SIGNUP_FAILED
} from "../types";

function* login({ payload }) {
  try {
    const response = yield call(postLogin, payload);
    yield put({
      type: LOGIN_SUCCESS,
      payload: { ...response.data }
    });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    yield put({ type: LOGIN_FAILED, payload: error.response });
  }
}

function* loginSuccess({ payload }) {
  if (!store.get("token")) {
    yield store.set("token", payload.token);
    yield store.set("userId", payload.userId);
  }
}

function* logout() {
  yield store.clearAll();
  yield put({ type: CLEAR_BUDGET });
}

function* signup({ payload }) {
  try {
    const response = yield call(putSignup, payload);
    yield put({
      type: LOGIN_SUCCESS,
      payload: { token: response.data.token, userId: response.data.userId }
    });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    yield put({ type: SIGNUP_FAILED, payload: error.response });
  }
}

function* forgotPassword({ payload }) {
  try {
    const response = yield call(postForgotPassword, payload);
    yield put({ type: FORGOT_PASSWORD_RESPONSE, payload: response.data });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    yield put({
      type: FORGOT_PASSWORD_RESPONSE,
      payload: error.response.data
    });
  }
}

function* resetPassword({ payload }) {
  try {
    yield call(postResetPassword, payload.newPassword, payload.token);
    yield put({ type: RESET_PASSWORD_SUCCESS });
  } catch (err) {
    yield put({ type: RESET_PASSWORD_FAILED });
  }
}

export function createAuthenticationsSaga() {
  return [
    takeLatest(SIGNUP, signup),
    takeLatest(LOGOUT, logout),
    takeLatest(LOGIN, login),
    takeLatest(LOGIN_SUCCESS, loginSuccess),
    takeLatest(FORGOT_PASSWORD, forgotPassword),
    takeLatest(RESET_PASSWORD, resetPassword)
  ];
}
