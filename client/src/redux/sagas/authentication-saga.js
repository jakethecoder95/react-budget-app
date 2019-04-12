import { takeEvery } from "redux-saga/effects";
import server from "../../apis/server";

function* signup({ payload }) {
  console.log(payload);
  const response = yield server.post("/signup", {
    ...payload
  });

  console.log(response);
}

export function createAuthenticationsSaga() {
  return [takeEvery("SIGN_UP", signup)];
}
