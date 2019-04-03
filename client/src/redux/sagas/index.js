import { all } from "redux-saga/effects";
import { createUpdateBudgetSaga } from "./update-budget-saga";

export default function* sagas() {
  yield all([...createUpdateBudgetSaga()]);
}
