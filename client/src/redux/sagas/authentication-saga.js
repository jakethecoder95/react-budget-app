import { takeEvery, call } from "redux-saga/effects";
import server from "../../apis/server";

import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS } from "../types";

const signupCall = async userInfo =>
  await server.post("/signup", {
    ...userInfo
  });

function* signup({ payload }) {
  const response = yield call(signupCall, payload);

  console.log(response);
}

export function createAuthenticationsSaga() {
  return [takeEvery(SIGNUP, signup)];
}
