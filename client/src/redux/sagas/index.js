import { all } from "redux-saga/effects";
import { createUpdateBudgetSaga } from "./update-budget-saga";
import { createGetSavedBudgetSaga } from "./get-saved-budget-saga";
import { createAuthenticationsSaga } from "./authentication-saga";
import { createUpdateSettingsSaga } from "./update-settings-saga";

export default function* sagas() {
  yield all([
    ...createUpdateBudgetSaga(),
    ...createGetSavedBudgetSaga(),
    ...createAuthenticationsSaga(),
    ...createUpdateSettingsSaga()
  ]);
}
