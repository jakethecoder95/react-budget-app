import "../Form.css";
import React from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import { FORGOT_PASSWORD } from "../../../redux/types";
import AuthField from "../AuthField";
import isEmail from "../../Util/regexEmail";
import history from "../../../history";

const EnterEmail = props => {
  if (props.forgotPasswordResponse.msg === "Success") {
    history.replace("/auth/forgot-password-enter-pin");
  }

  const onSubmit = async ({ email }) => await props.postForgotPassword(email);

  const validate = values => {
    const { email } = values;
    const errors = {};
    // Async errors
    const { forgotPasswordResponse } = props;
    if (forgotPasswordResponse && forgotPasswordResponse.msg !== "Success") {
      if (forgotPasswordResponse.value === email) {
        errors.email = forgotPasswordResponse.msg;
      }
    }
    // Normal errors
    if (!email) {
      errors.email = "Required";
    } else if (!isEmail(email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  const authField = props => <AuthField {...props} displayLabel={false} />;
  return (
    <div className="ui container">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, submitting }) => (
          <form onSubmit={handleSubmit} className="ui form auth-form">
            <h4 className="ui dividing header">
              Please enter the email address connected to your account
            </h4>
            <div className="fields">
              <Field name="email" component={authField} />
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
          </form>
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  postForgotPassword: email =>
    dispatch({ type: FORGOT_PASSWORD, payload: email })
});

const mapStateToProps = ({ auth }) => ({
  forgotPasswordResponse: auth.forgotPasswordResponse
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnterEmail);
