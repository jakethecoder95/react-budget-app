import "./ChartsPage.css";
import React from "react";
import { connect } from "react-redux";

import Left from "./Left/Left";
import Right from "./Right/Right";

const ChartsPage = props => {
  const percentages = Object.values(props.catagoryTotals).map(el =>
    Math.round((el / props.totalExpenses) * 100)
  );
  !props.totalExpenses ? percentages.unshift(100) : percentages.unshift(0);
  return (
    <div className="ui container">
      <div className="charts">
        <div className="charts__left">
          <h2>Spendings: March 2019</h2>
          <Left totalExpenses={props.totalExpenses} percentages={percentages} />
        </div>
        <Right />
      </div>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  catagoryTotals: budget.catagoryTotals,
  totalExpenses: budget.totalExpenses
});

export default connect(mapStateToProps)(ChartsPage);
