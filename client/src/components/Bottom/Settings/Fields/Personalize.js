import React from "react";
import { connect } from "react-redux";

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

const now = new Date();

const Personalize = ({ from, to, onToChange, onFromChange }) => {
  const currentMonth = now.getMonth();

  const renderMonthsOptions = () => {
    return months.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

  const renderYearOptions = () => {
    const years = [];
    const year = now.getFullYear();

    for (let i = 0; i < 50; i++) {
      years[i] = year - i;
    }

    return years.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

  from.month = !from.month
    ? months[currentMonth > 0 ? currentMonth - 1 : 11]
    : from.month;
  to.month = !to.month
    ? months[currentMonth > 0 ? currentMonth - 1 : 11]
    : to.month;

  from.year = !from.year ? now.getFullYear() : from.year;
  to.year = !to.year ? now.getFullYear() : to.year;

  return (
    <div className="ui grid">
      <div className="eight wide column">
        <h4
          className="ui dividing header center"
          style={{ textAlign: "center" }}
        >
          From
        </h4>
        <div className="ui inline fields">
          <div className="field">
            <label>Month</label>
            <select value={from.month}>{renderMonthsOptions()}</select>
          </div>
          <div className="field">
            <label>Year</label>
            <select value={from.year}>{renderYearOptions()}</select>
          </div>
        </div>
      </div>
      <div className="eight wide column">
        <h4 className="ui dividing header" style={{ textAlign: "center" }}>
          To
        </h4>
        <div className="ui inline fields">
          <div className="field">
            <label>Month</label>
            <select value={to.month}>{renderMonthsOptions()}</select>
          </div>
          <div className="field">
            <label>Year</label>
            <select value={to.year}>{renderYearOptions()}</select>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  from: userSettings.budgetSettings.from,
  to: userSettings.budgetSettings.to
});

export default connect(mapStateToProps)(Personalize);
