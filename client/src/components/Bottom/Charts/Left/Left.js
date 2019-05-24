import React from "react";
import DoughnutChart from "./DoughnutChart";

const monthNames = [
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

const Left = props => {
  const chartData = {
    totalExpenses: props.totalExpenses,
    percentages: props.percentages
  };
  const date = new Date();
  return (
    <div className="charts__left">
      <h2>
        Spendings: {monthNames[date.getMonth()]} {date.getFullYear()}
      </h2>
      <DoughnutChart {...chartData} />
    </div>
  );
};

export default Left;
