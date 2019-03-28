import React, { Fragment } from "react";
import hasError from "../util/has-error";

const InputValue = ({ input, meta }) => {
  const classNames = `two wide field ${hasError(meta)}`;
  return (
    <Fragment>
      <label>Value</label>
      <div className={classNames}>
        <input
          {...input}
          className="add__description"
          placeholder="Value"
          type="number"
          step="0.01"
        />
      </div>
    </Fragment>
  );
};

export default InputValue;
