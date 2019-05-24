import React from "react";

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
  const renderMonthsOptions = () => {
    return months.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

  const renderYearOptions = () => {
    const years = [];
    const year = now.getFullYear();

    for (let i = 0; i < 50; i++) {
      years[i] = year - i + 1;
    }

    return years.map((el, i) => {
      return <option key={i}>{el}</option>;
    });
  };

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
            <select>{renderMonthsOptions()}</select>
          </div>
          <div className="field">
            <label>Year</label>
            <select>{renderYearOptions()}</select>
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
            <select>{renderMonthsOptions()}</select>
          </div>
          <div className="field">
            <label>Year</label>
            <select>{renderYearOptions()}</select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalize;
