import "./BackBtn.css";
import React from "react";

import history from "../../history";

const BackBtn = props => {
  return (
    <div className="back-btn">
      <div onClick={history.goBack} className="ui button inverted">
        <i className="arrow left icon" />
        Go Back
      </div>
    </div>
  );
};

export default BackBtn;
