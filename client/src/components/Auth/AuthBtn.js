import "./AuthBtn.css";
import React from "react";
import { Link } from "react-router-dom";

const SignupBtn = props => {
  return (
    <Link to="/signup" className="item auth-button">
      Signup
    </Link>
  );
};

export default SignupBtn;
