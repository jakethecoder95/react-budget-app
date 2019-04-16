import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import AuthField from "./AuthField";
import isEmail from "../Util/regexEmail";

const Signup = props => {
  if (props.signupResponse.success) {
    return <Redirect to="/budget" />;
  }

  const onSubmit = async userInfo => props.signup(userInfo);

  const validate = ({ username, email, password }) => {
    const asyncErrors = props.signupResponse.data
      ? props.signupResponse.data.data
      : [];
    const errors = {};
    if (asyncErrors) {
      asyncErrors.forEach(err => {
        if (email === err.value) errors[err.param] = err.msg;
      });
    }
    if (!username) {
      errors.username = "Required";
    } else if (username.length < 3) {
      errors.username = "Must be longer than 2 characters";
    } else if (username.length > 60) {
      errors.username = "Must be shorter than 60 characters";
    }
    if (!email) {
      errors.email = "Required";
    } else if (!isEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    if (!password) {
      errors.password = "Required";
    } else if (password.length < 6) {
      errors.password = "Must be longer than 6 characters";
    }
    return errors;
  };

  return (
    <Fragment>
      <div className="top" />
      <div className="ui container">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, invalid, submitting, errors }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              <h2 className="ui dividing header">Signup</h2>
              <div className="fields">
                <Field name="username" component={AuthField} />
                <Field name="email" component={AuthField} />
                <Field name="password" component={AuthField} />
              </div>
              <button
                type="submit"
                disabled={pristine || submitting}
                className="ui button primary"
                style={{ marginTop: "1em" }}
              >
                Signup
              </button>
            </form>
          )}
        />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  signup: userInfo => dispatch({ type: "SIGNUP", payload: userInfo })
});

const mapStateToProps = state => ({
  signupResponse: state.auth.signupResponse
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
