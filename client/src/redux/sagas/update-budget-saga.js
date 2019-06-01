import { takeLatest, put, select } from "redux-saga/effects";
import store from "store";

import { putItemAsync, deleteItemAsync } from "../../apis/server";
import {
  ADD_ITEM,
  ADD_INCOME_ITEM,
  ADD_EXPENSE_ITEM,
  DELETE_INCOME_ITEM,
  DELETE_EXPENSE_ITEM,
  DELETE_ITEM,
  LOGOUT
} from "../types";

function* addItem({ payload }) {
  let state = yield select();
  if (state.auth.isLoggedIn) {
    try {
      const authString = `Bearer ${store.get("token")}`;
      const response = yield putItemAsync(payload, authString);
      payload._id = response.data._id;
    } catch (error) {
      yield put({ type: LOGOUT });
      if (!error.response) {
        alert(
          "We could not connect to the server. Please check your internet and try again"
        );
      }
      if (error.response.status === 401) {
        alert(
          "401 Error: Looks like there was an issue.  Please log back in a try again."
        );
      }
      if (error.response.status === 500) {
        alert(
          "500 Error: Looks like there was a server issue. Please check your internet connection."
        );
      }
    }
  }
  if (payload.type === "inc") {
    yield put({ type: ADD_INCOME_ITEM, payload });
  } else {
    yield put({ type: ADD_EXPENSE_ITEM, payload });
  }
  state = yield select();
  if (!state.auth.isLoggedIn) {
    store.set("budget", state.budget);
  }
}

function* deleteItem({ payload }) {
  if (payload.type === "inc") {
    yield put({ type: DELETE_INCOME_ITEM, payload });
  } else {
    yield put({ type: DELETE_EXPENSE_ITEM, payload });
  }
  let state = yield select();
  if (!state.auth.isLoggedIn) {
    return store.set("budget", state.budget);
  }
  try {
    const authString = `Bearer ${store.get("token")}`;
    yield deleteItemAsync(payload._id, authString);
  } catch (error) {
    yield put({ type: LOGOUT });
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    if (error.response.status === 401) {
      return alert(
        "401 Error: Looks like there was an issue.  Please log back in a try again."
      );
    }
    if (error.response.status === 500) {
      return alert(
        "500 Error: Looks like there was a server issue. Please check your internet connection."
      );
    }
  }
}

export function createUpdateBudgetSaga() {
  return [takeLatest(ADD_ITEM, addItem), takeLatest(DELETE_ITEM, deleteItem)];
}
