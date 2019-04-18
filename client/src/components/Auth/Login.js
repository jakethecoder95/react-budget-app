import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { LOGIN } from "../../redux/types";
import AuthField from "./AuthField";
import BackBtn from "../UtilComponents/BackBtn";
import isEmail from "../Util/regexEmail";

const Login = props => {
  if (props.isLoggedIn) {
    return <Redirect to="/budget" />;
  }

  const onSubmit = info => props.login(info);

  const validate = values => {
    const { email, password } = values;
    const errors = {};
    // Async errors
    const { loginResponse } = props;
    if (loginResponse.data) {
      if (
        loginResponse.status === 401 &&
        values[loginResponse.data.param] === loginResponse.data.value
      ) {
        errors[loginResponse.data.param] = loginResponse.data.msg;
      }
    }
    if (!email) {
      errors.email = "Required";
    } else if (!isEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    if (!password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <Fragment>
      <div className="top">
        <BackBtn />
      </div>
      <div className="ui container">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, submitting, form }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              <h2 className="ui dividing header">Login</h2>
              <div className="fields">
                <Field name="email" component={AuthField} />
                <Field name="password" component={AuthField} />
              </div>

              <button
                type="submit"
                id="button"
                disabled={pristine || submitting}
                className="ui button primary"
                style={{ marginTop: "1em" }}
              >
                Login
              </button>
              <div className="field" style={{ marginTop: "10px" }}>
                <Link to="/signup">Signup</Link>
              </div>
            </form>
          )}
        />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  login: userInfo => dispatch({ type: LOGIN, payload: userInfo })
});

const mapStateToProps = ({ auth }) => ({
  loginResponse: auth.loginResponse,
  isLoggedIn: auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
