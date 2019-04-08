import React, { Fragment } from "react";

const RadioPersistItem = ({ onPersistChange }) => {
  return (
    <Fragment>
      <div className="two wide field">
        <label style={{ display: "block" }} className="checkbox-label">
          Monthly:
        </label>
        <input
          className="checkbox"
          type="checkbox"
          onChange={e => onPersistChange(e.target.checked)}
        />
      </div>
    </Fragment>
  );
};

export default RadioPersistItem;
