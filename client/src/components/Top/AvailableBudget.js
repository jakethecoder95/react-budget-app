import React from "react";
import { connect } from "react-redux";

import formatNumber from "./util/format-number";

const AvailableBudget = ({ availableBudget }) => {
  const icon = availableBudget >= 0 ? "+" : "-";
  const budget = formatNumber(availableBudget);
  return (
    <div className="available-budget">
      <h1>
        {icon} {budget}
      </h1>
    </div>
  );
};

const mapStateToprops = ({ budget }) => ({
  availableBudget: budget.totalIncome - budget.totalExpenses
});

export default connect(mapStateToprops)(AvailableBudget);
