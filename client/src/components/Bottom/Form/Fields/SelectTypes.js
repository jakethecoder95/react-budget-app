import React from "react";

const SelectTypes = ({ input, onTypeChange }) => {
  return (
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
  );
};

export default SelectTypes;
