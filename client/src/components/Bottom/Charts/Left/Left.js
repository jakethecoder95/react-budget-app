import React from "react";
import DoughnutChart from "./DoughnutChart";

const Left = props => {
  const chartData = {
    totalExpenses: props.totalExpenses,
    percentages: props.percentages
  };
  return <DoughnutChart {...chartData} />;
};

export default Left;
