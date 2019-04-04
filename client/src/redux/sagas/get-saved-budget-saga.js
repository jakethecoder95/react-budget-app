import { takeEvery, put } from "redux-saga/effects";
import store from "store";

import { SET_INITIAL_BUDGET, CHECK_LOCAL_STORAGE } from "../types";

function* checkLocalStorage() {
  const storedBudget = store.get("budget");
  if (storedBudget) {
    yield put({ type: SET_INITIAL_BUDGET, payload: storedBudget });
  }
}

export function createGetSavedBudgetSaga() {
  return [takeEvery(CHECK_LOCAL_STORAGE, checkLocalStorage)];
}
