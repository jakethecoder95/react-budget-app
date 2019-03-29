import React, { Fragment } from "react";
import hasError from "../util/has-error";

const InputDescription = ({ input, meta, selectedType }) => {
  const classNames = `six wide field ${hasError(meta)}`;
  return (
    <Fragment>
      <label>Description</label>
      <div className={classNames}>
        <input
          {...input}
          className={`add__description input-item${
            selectedType === "exp" ? "__red" : ""
          }`}
          placeholder="Add description"
          autoComplete="off"
        />
      </div>
    </Fragment>
  );
};

export default InputDescription;
