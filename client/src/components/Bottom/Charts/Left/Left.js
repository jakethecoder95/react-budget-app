import React from "react";
import { connect } from "react-redux";
import DoughnutChart from "./DoughnutChart";

const Left = props => {
  const chartData = {
    totalExpenses: props.totalExpenses,
    percentages: props.percentages
  };

  return (
    <div className="charts__left">
      <h2>{props.dateString}</h2>
      <DoughnutChart {...chartData} />
    </div>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  dateString: userSettings.dateString.replace("Your budget for", "Spendings:")
});

export default connect(mapStateToProps)(Left);
