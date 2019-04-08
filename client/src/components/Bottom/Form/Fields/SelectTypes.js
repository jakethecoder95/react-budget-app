import React, { Fragment } from "react";

const SelectTypes = ({ input, onTypeChange, selectedType }) => {
  return (
    <Fragment>
      <label>Type</label>
      <div className="three wide field">
        <select
          {...input}
          className={`ui fluid dropdown input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
          onClick={e => onTypeChange(e.target.value)}
        >
          <option value="inc">Add Income</option>
          <option value="exp">Add Expense</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectTypes;
