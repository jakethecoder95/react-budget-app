import React from "react";
import { connect } from "react-redux";

import formatNumber from "../Util/format-number";
import Percentage from "../UtilComponents/Percentage";

const Expences = ({ totalExpenses, totalIncome }) => {
  return (
    <div className="top-expences">
      <p>EXPENSES</p>
      <div style={{ display: "flex" }}>
        <p>- {formatNumber(totalExpenses)}</p>
        <Percentage value={totalExpenses} total={totalIncome} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  totalExpenses: budget.totalExpenses,
  totalIncome: budget.totalIncome
});

export default connect(mapStateToProps)(Expences);
