import React from "react";
import { connect } from "react-redux";

import formatNumber from "../Util/format-number";
import Percentage from "../UtilComponents/Percentage";

const Income = ({ totalIncome }) => {
  return (
    <div className="ui teal top-income">
      <p>INCOME</p>
      <div style={{ display: "flex" }}>
        <p>+ {formatNumber(totalIncome)}</p>
        <Percentage hidden />
      </div>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  totalIncome: budget.totalIncome
});

export default connect(mapStateToProps)(Income);
