import React, { Fragment } from "react";
import hasError from "../util/has-error";

const InputDescription = ({ input, meta }) => {
  const classNames = `six wide field ${hasError(meta)}`;
  return (
    <Fragment>
      <label>Description</label>
      <div className={classNames}>
        <input
          {...input}
          className="add__description"
          placeholder="Add description"
          autoComplete="off"
        />
      </div>
    </Fragment>
  );
};

export default InputDescription;
