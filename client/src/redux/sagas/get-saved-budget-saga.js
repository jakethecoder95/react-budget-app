import { takeEvery, put } from "redux-saga/effects";
import store from "store";

import { SET_INITIAL_BUDGET, CHECK_LOCAL_STORAGE } from "../types";

function* checkLocalStorage() {
  let storedBudget = store.get("budget");

  if (storedBudget) {
    storedBudget = JSON.parse(storedBudget);
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
  return [takeEvery(CHECK_LOCAL_STORAGE, checkLocalStorage)];
}
