import { takeLatest, put, race, take, call } from "redux-saga/effects";
import _ from "lodash";

import { getUserBudgetAsync, mergeBudgetAsync } from "../../apis/server";
import store from "store";

import {
  CHECK_LOCAL_STORAGE,
  INIT_USER_BUDGET,
  LOGIN_SUCCESS,
  LOGOUT,
  MERGE_BUDGET_CONFIRM,
  MERGE_BUDGET_NO,
  MERGE_BUDGET_YES,
  SET_INITIAL_BUDGET
} from "../types";

function* initUserBudget() {
  const token = store.get("token");
  if (!token) {
    return yield put({ type: CHECK_LOCAL_STORAGE });
  }
  const authString = `Bearer ${token}`;
  yield confirmMergeBudget(authString);
  try {
    const date = { all: false, from: new Date().toISOString(), to: null }; // TODO: This will be done dynamically when user settings are set up
    const response = yield call(getUserBudgetAsync, date, authString);
    yield put({
      type: LOGIN_SUCCESS,
      payload: { ...response.data.userSettings }
    });
    yield put({
      type: SET_INITIAL_BUDGET,
      payload: { ...response.data.budget }
    });
  } catch (error) {
    if (!error.response) {
      return alert(
        "We could not connect to the server. Please check your internet and try again"
      );
    }
    yield alert(
      "Looks like there was an error logging you in. Please log back in."
    );
    yield put({ type: LOGOUT });
  }
}

function* checkLocalStorage() {
  let storedBudget = store.get("budget");

  if (!storedBudget) return;

  const currentMonth = new Date().getMonth();
  const { incomeItems, expenseItems } = storedBudget.items;

  // Omit any income item not in the current month
  const incomes = Object.values(incomeItems).filter(item => {
    const itemMonth = new Date(item.date).getMonth();
    if (!item.persist && itemMonth !== currentMonth) {
      storedBudget.totalIncome -= item.value;
    }
    return item.persist || itemMonth === currentMonth;
  });

  // Omit any expense item not in the current month
  const expenses = Object.values(expenseItems).filter(item => {
    const itemMonth = new Date(item.date).getMonth();
    if (!item.persist && itemMonth !== currentMonth) {
      storedBudget.totalExpenses -= item.value;
      storedBudget.catagoryTotals[item.catagory] -= item.value;
    }
    return item.persist || itemMonth === currentMonth;
  });

  yield put({
    type: SET_INITIAL_BUDGET,
    payload: {
      ...storedBudget,
      items: { incomeItems: { ...incomes }, expenseItems: { ...expenses } }
    }
  });
}

function* confirmMergeBudget(authString) {
  const localBudget = store.get("budget");
  if (localBudget) {
    yield put({ type: MERGE_BUDGET_CONFIRM });

    const { yes } = yield race({
      yes: take(MERGE_BUDGET_YES),
      no: take(MERGE_BUDGET_NO)
    });

    if (yes) {
      yield mergeLocalStorageWithUserBudget(localBudget.items, authString);
    }
  }
  store.remove("budget");
}

function* mergeLocalStorageWithUserBudget(items, authString) {
  const incomeItems = Object.values(items.incomeItems).map(item =>
    _.omit(item, "_id")
  );
  const expenseItems = Object.values(items.expenseItems).map(item =>
    _.omit(item, "_id")
  );

  try {
    yield call(
      mergeBudgetAsync,
      { ...items, incomeItems, expenseItems },
      authString
    );
  } catch (error) {
    console.log(error.response);
  }
}

export function createGetSavedBudgetSaga() {
  return [
    takeLatest(INIT_USER_BUDGET, initUserBudget),
    takeLatest(CHECK_LOCAL_STORAGE, checkLocalStorage)
  ];
}
