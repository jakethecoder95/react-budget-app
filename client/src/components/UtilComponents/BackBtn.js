import "./BackBtn.css";
import React from "react";
import { Link } from "react-router-dom";

const BackBtn = props => {
  return (
    <div className="back-btn">
      <Link to="/budget" className="ui button inverted">
        <i className="arrow left icon" />
        Go Back
      </Link>
    </div>
  );
};

export default BackBtn;
