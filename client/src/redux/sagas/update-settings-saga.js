import { takeLatest, put, call } from "redux-saga/effects";
import store from "store";

import {
  UPDATE_USER_BIO,
  UPDATE_USER_BUDGET_SETTINGS,
  LOGOUT,
  UPDATE_USER_SETTINGS_SUCCESS
} from "../types";
import { postUpdateUserBio } from "../../apis/server";
import history from "../../history";

// Payload will always be an object with email and username as values
function* updateUserBio({ payload }) {
  const token = store.get("token");
  if (!token) {
    yield alert(
      "Oops! There was a problem there. Please log back in and try again"
    );
    yield put({ type: LOGOUT });
    history.push("/login");
  }
  const authString = `Bearer ${token}`;
  try {
    const response = yield call(postUpdateUserBio, payload, authString);
    yield put({
      type: UPDATE_USER_SETTINGS_SUCCESS,
      payload: { ...response.data.user }
    });
  } catch (err) {
    console.log(err);
    console.log(err.response);
  }
}

function* updateUserBudgetSettings({ payload }) {
  yield console.log("working");
}

export function createUpdateSettingsSaga() {
  return [
    takeLatest(UPDATE_USER_BIO, updateUserBio),
    takeLatest(UPDATE_USER_BUDGET_SETTINGS, updateUserBudgetSettings)
  ];
}
