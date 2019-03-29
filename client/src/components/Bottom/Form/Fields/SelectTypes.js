import React, { Fragment } from "react";

const SelectTypes = ({ input, onTypeChange }) => {
  return (
    <Fragment>
      <label>Type</label>
      <div className="three wide field">
        <select
          {...input}
          className="ui fluid dropdown"
          onChange={e => onTypeChange(e.target.value)}
        >
          <option value="inc">Add Income</option>
          <option value="exp">Add Expense</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectTypes;
