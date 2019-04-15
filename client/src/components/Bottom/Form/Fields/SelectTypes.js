import React, { Fragment } from "react";

const SelectTypes = ({ input, selectedType }) => {
  return (
    <Fragment>
      <label>Type</label>
      <div className="three wide field">
        <select
          {...input}
          name="type"
          className={`ui fluid dropdown input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
        >
          <option value="inc">Add Income</option>
          <option value="exp">Add Expense</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectTypes;
