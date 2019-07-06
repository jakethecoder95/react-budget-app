import "./BudgetDisplay.css";
import React from "react";
import { connect } from "react-redux";

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
        <h4>{this.props.dateString}</h4>
        <AvailableBudget />
        <Income />
        <Expenses />
      </div>
    );
  }
}

const mapStateToProps = ({ userSettings }) => ({
  dateString: userSettings.dateString
});

export default connect(mapStateToProps)(BudgetDisplay);
