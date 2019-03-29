import React, { Fragment } from "react";
import hasError from "../util/has-error";

const InputValue = ({ input, meta, selectedType }) => {
  const classNames = `two wide field ${hasError(meta)}`;
  return (
    <Fragment>
      <label>Value</label>
      <div className={classNames}>
        <input
          {...input}
          className={`add__value input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
          placeholder="Value"
          type="number"
          step="0.01"
          autoComplete="off"
        />
      </div>
    </Fragment>
  );
};

export default InputValue;
