import "./Bottom.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";
import BudgetOverview from "./Overview/BudgetOverview.js";
import BudgetMonthChart from "./Charts/BudgetMonthChart";
import BudgetForm from "./Form/BudgetForm";
import Navbar from "./Navbar";

class Bottom extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <BudgetForm />
            <Navbar />
            <Switch>
              <Route path="/" exact component={BudgetOverview} />
              <Route path="/charts" exact component={BudgetMonthChart} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Bottom;
