import React, { Fragment } from "react";

const SelectTypes = ({ input, onTypeChange }) => {
  return (
    <Fragment>
      <label>Type</label>
      <div className="two wide field">
        <select
          {...input}
          className="ui fluid dropdown"
          onChange={e => onTypeChange(e.target.value)}
        >
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
      </div>
    </Fragment>
  );
};

export default SelectTypes;
