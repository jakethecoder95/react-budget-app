import "../Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import { RESET_PASSWORD } from "../../../redux/types";
import AuthField from "../AuthField";

const ResetPassword = props => {
  const onSubmit = async values => await props.postResetPassword(values);

  const validate = (values, other) => {
    const { password, confirmPassword } = values;
    const errors = {};
    // Async errors
    const asyncErrors = props.resetPasswordResponse;
    if (asyncErrors) {
      asyncErrors.forEach(err => {
        if (values[err.param] === err.value) errors[err.param] = err.msg;
      });
    }
    // Normal errors
    if (!password) {
      errors.password = "Required";
    } else if (password.length < 6) {
      errors.password = "Must be longer than 6 characters";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Does not match";
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
          render={({ handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              <h1 className="ui dividing header">Reset Password</h1>
              <div className="fields">
                <Field name="password" component={AuthField} />
                <Field name="confirmPassword" component={AuthField} />
              </div>

              <button
                type="submit"
                id="button"
                disabled={pristine || submitting}
                className="ui button primary"
                style={{ marginTop: "1em" }}
              >
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  postForgotPassword: values =>
    dispatch({ type: RESET_PASSWORD, payload: values })
});

const mapStateToProps = ({ auth }) => ({
  resetPasswordResponse: auth.resetPasswordResponse
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
