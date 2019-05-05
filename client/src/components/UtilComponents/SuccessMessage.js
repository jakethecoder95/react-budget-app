import "./SuccessMessage.scss";
import React, { Fragment } from "react";

const SuccessMessage = ({ message }) => {
  return (
    <Fragment>
      <h3>{message}</h3>
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip" />
          <span className="icon-line line-long" />
          <div className="icon-circle" />
          <div className="icon-fix" />
        </div>
      </div>
      <center>
        <h2 className="success-message__header" style={{ color: "#4caf50" }}>
          Success!
        </h2>
      </center>
    </Fragment>
  );
};
export default SuccessMessage;
