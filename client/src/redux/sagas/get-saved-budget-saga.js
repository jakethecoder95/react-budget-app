import { takeLatest, put } from "redux-saga/effects";
import { getUserBudgetAsync } from "../../apis/server";
import store from "store";

import {
  CHECK_LOCAL_STORAGE,
  INIT_USER_BUDGET,
  LOGIN_SUCCESS,
  SET_INITIAL_BUDGET,
  LOGOUT
} from "../types";

function* initUserBudget() {
  const token = store.get("token");
  if (!token) {
    return yield put({ type: CHECK_LOCAL_STORAGE });
  }
  const authString = `Bearer ${token}`;
  try {
    const date = { all: false, from: new Date().toISOString(), to: null }; // TODO: This will be done dynamically when user settings are set up
    const response = yield getUserBudgetAsync(date, authString);
    yield put({ type: LOGIN_SUCCESS });
    yield put({ type: SET_INITIAL_BUDGET, payload: { ...response.data } });
  } catch (err) {
    yield alert(
      "Looks like there was an error logging you in. Please log back in."
    );
    yield put({ type: LOGOUT });
  }
}

function* checkLocalStorage() {
  let storedBudget = store.get("budget");

  if (storedBudget) {
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

    if (storedBudget) {
      yield put({
        type: SET_INITIAL_BUDGET,
        payload: {
          ...storedBudget,
          items: { incomeItems: { ...incomes }, expenseItems: { ...expenses } }
        }
      });
    }
  }
}

export function createGetSavedBudgetSaga() {
  return [
    takeLatest(INIT_USER_BUDGET, initUserBudget),
    takeLatest(CHECK_LOCAL_STORAGE, checkLocalStorage)
  ];
}
