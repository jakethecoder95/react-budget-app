import "./BudgetOverview.css";
import React from "react";

import Income from "./Income";
import Expenses from "./Expenses";

class BudgetOverview extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="overview ui fluid accordion">
          <Income />
          <Expenses />
        </div>
      </div>
    );
  }
}

export default BudgetOverview;
