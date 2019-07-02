import { takeLatest, put, call } from "redux-saga/effects";
import store from "store";

import {
  UPDATE_USER_BIO,
  UPDATE_USER_BUDGET_SETTINGS,
  LOGOUT,
  UPDATE_USER_SETTINGS_SUCCESS,
  INIT_USER_BUDGET
} from "../types";
import {
  postUpdateUserBioSettings,
  postUpdateUserBudgetSettings
} from "../../apis/server";
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
    const response = yield call(postUpdateUserBioSettings, payload, authString);
    yield put({
      type: UPDATE_USER_SETTINGS_SUCCESS,
      payload: { ...response.data.user }
    });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    console.log(error);
    console.log(error.response);
  }
}

// Payload will always be an object with users new budget settings
function* updateUserBudgetSettings({ payload }) {
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
    const response = yield call(
      postUpdateUserBudgetSettings,
      payload,
      authString
    );
    yield put({
      type: UPDATE_USER_SETTINGS_SUCCESS,
      payload: { ...response.data.user }
    });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    console.log(error);
    console.log(error.response);
  }
}

function* updateUserSettingsSuccess() {
  yield put({ type: INIT_USER_BUDGET });
}

export function createUpdateSettingsSaga() {
  return [
    takeLatest(UPDATE_USER_BIO, updateUserBio),
    takeLatest(UPDATE_USER_BUDGET_SETTINGS, updateUserBudgetSettings),
    takeLatest(UPDATE_USER_SETTINGS_SUCCESS, updateUserSettingsSuccess)
  ];
}
