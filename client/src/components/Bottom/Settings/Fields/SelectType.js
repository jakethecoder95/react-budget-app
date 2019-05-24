import React, { Fragment } from "react";

const SelectType = ({ selectedType, onTypeChange }) => {
  const mobileView = window.innerWidth < 500;
  return (
    <Fragment>
      {mobileView && <h4 htmlFor="selectType">Select what type you want: </h4>}
      <div className="inline fields">
        {!mobileView && (
          <label htmlFor="selectType">Select what type you want: </label>
        )}
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="selectedType"
              value="month"
              checked={selectedType === "month"}
              onChange={() => onTypeChange("month")}
            />
            <label>Month</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="selectedType"
              value="all"
              checked={selectedType === "all"}
              onChange={() => onTypeChange("all")}
            />
            <label>All</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <input
              type="radio"
              name="selectedType"
              value="personalize"
              checked={selectedType === "personalize"}
              onChange={() => onTypeChange("personalize")}
            />
            <label>Personalize</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectType;
