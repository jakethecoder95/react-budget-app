import { takeEvery, put, select } from "redux-saga/effects";
import store from "store";

import {
  ADD_INCOME_ITEM,
  ADD_EXPENSE_ITEM,
  DELETE_INCOME_ITEM,
  DELETE_EXPENSE_ITEM,
  ADD_ITEM,
  DELETE_ITEM
} from "../types";

function* addItem({ payload }) {
  if (payload.type === "inc") {
    yield put({ type: ADD_INCOME_ITEM, payload });
  } else {
    yield put({ type: ADD_EXPENSE_ITEM, payload });
  }
  let state = yield select();
  store.set("budget", JSON.stringify(state.budget));
}

function* deleteItem({ payload }) {
  if (payload.type === "inc") {
    yield put({ type: DELETE_INCOME_ITEM, payload });
  } else {
    yield put({ type: DELETE_EXPENSE_ITEM, payload });
  }
  let state = yield select();
  store.set("budget", JSON.stringify(state.budget));
}

export function createUpdateBudgetSaga() {
  return [takeEvery(ADD_ITEM, addItem), takeEvery(DELETE_ITEM, deleteItem)];
}
