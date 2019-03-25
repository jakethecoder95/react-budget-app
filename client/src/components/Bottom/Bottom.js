import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";
import BudgetOverview from "./Overview/BudgetOverview.js";
import BudgetMonthChart from "./Charts/BudgetMonthChart";
import BudgetYearChart from "./Charts/BudgetYearChart";
import BudgetForm from "./Form/BudgetForm";

class Bottom extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <BudgetForm />
            <Switch>
              <Route path="/" exact component={BudgetOverview} />
              <Route path="/month" exact component={BudgetMonthChart} />
              <Route path="/year" exact component={BudgetYearChart} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Bottom;
