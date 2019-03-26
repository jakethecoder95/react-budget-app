import React from "react";
import hasError from "../util/has-error";

const InputValue = ({ input, meta }) => {
  const classNames = `two wide field ${hasError(meta)}`;
  return (
    <div className={classNames}>
      <input
        {...input}
        className="add__description"
        placeholder="Value"
        type="number"
      />
    </div>
  );
};

export default InputValue;
