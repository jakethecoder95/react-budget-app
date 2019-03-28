import "./BudgetDisplay.css";
import React from "react";

import AvailableBudget from "./AvailableBudget";
import Income from "./Income";
import Expenses from "./Expenses";

class BudgetDisplay extends React.Component {
  getDate = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return `${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
  };
  render() {
    return (
      <div className="budget-display">
        <h4>{`Available Budget in ${this.getDate()}:`}</h4>
        <AvailableBudget />
        <Income />
        <Expenses />
      </div>
    );
  }
}

export default BudgetDisplay;
