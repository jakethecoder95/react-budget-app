import { takeEvery, put, call } from "redux-saga/effects";
import server from "../../apis/server";

import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS } from "../types";

const putSignup = async userInfo =>
  await server.put("/signup", {
    ...userInfo
  });

function* signup({ payload }) {
  try {
    const response = yield call(putSignup, payload);
    yield put({ type: SIGNUP_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: SIGNUP_FAILED, payload: error.response });
  }
}

export function createAuthenticationsSaga() {
  return [takeEvery(SIGNUP, signup)];
}
