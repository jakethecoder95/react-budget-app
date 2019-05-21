import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../../history";
import BudgetOverview from "./Overview/BudgetOverview.js";
import ChartsPage from "./Charts/ChartsPage";
import BudgetForm from "./Form/BudgetForm";
import MobileForm from "./Form/MobileForm";
import MobileAddButton from "./Form/MobileAddButton";
import Settings from "./Settings";
import Navbar from "../Nav/Navbar";

class Bottom extends React.Component {
  render() {
    return (
      <div className="bottom">
        <Router history={history}>
          <div>
            <BudgetForm />
            <Navbar />
            <Switch>
              <Route path="/budget" exact component={BudgetOverview} />
              <Route path="/budget/charts" exact component={ChartsPage} />
              <Route path="/budget/settings" exact component={Settings} />
              <Route path="/budget/mobile-form" component={MobileForm} />
            </Switch>
            <MobileAddButton />
          </div>
        </Router>
      </div>
    );
  }
}

export default Bottom;
