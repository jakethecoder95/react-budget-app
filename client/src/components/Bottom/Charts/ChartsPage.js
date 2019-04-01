import "./ChartsPage.css";
import React from "react";
import { connect } from "react-redux";

import DoughnutChart from "./DoughnutChart";

const ChartsPage = props => {
  const percentages = Object.values(props.catagoryTotals).map(el =>
    ((el / props.totalExpenses) * 100).toFixed(2)
  );
  !props.totalExpenses ? percentages.unshift(100) : percentages.unshift(0);
  return (
    <div className="ui container">
      <div className="charts">
        <div className="charts__left">
          <h2>Spendings: March 2019</h2>
          <DoughnutChart
            totalExpenses={props.totalExpenses}
            percentages={percentages}
          />
        </div>
        <div className="charts__right">
          <h2>Charts section right</h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  catagoryTotals: budget.catagoryTotals,
  totalExpenses: budget.totalExpenses
});

export default connect(mapStateToProps)(ChartsPage);
