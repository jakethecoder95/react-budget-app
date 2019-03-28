import "./BudgetOverview.css";
import React from "react";

import Income from "./Income";
import Expences from "./Expences";

class BudgetOverview extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="overview ui fluid accordion">
          <Income />
          <Expences />
        </div>
      </div>
    );
  }
}

export default BudgetOverview;
