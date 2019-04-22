import "./AuthBtn.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { LOGOUT } from "../../redux/types";

const SignupBtn = props => {
  if (!props.isLoggedIn) {
    return (
      <Fragment>
        <Link to="/signup" className="auth-button ui button">
          Signup
        </Link>
        <Link to="/login" className="auth-button ui button primary">
          Login
        </Link>
      </Fragment>
    );
  }
  return (
    <Link
      to="/budget"
      className="auth-button ui button red"
      onClick={props.logout}
    >
      Logout
    </Link>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: LOGOUT })
});

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupBtn);
