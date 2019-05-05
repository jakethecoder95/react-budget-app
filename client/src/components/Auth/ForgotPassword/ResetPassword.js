import "../Form.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import { RESET_PASSWORD } from "../../../redux/types";
import AuthField from "../AuthField";
import BackBtn from "../../UtilComponents/BackBtn";
import SuccessMessage from "../../UtilComponents/SuccessMessage";
import history from "../../../history";

const ResetPassword = props => {
  if (props.passwordWasReset === false) {
    alert("Oops, looks like that token has expired. Please try again.");
    history.replace("/auth/forgot-password");
  }

  const { token } = props.match.params;
  const onSubmit = async ({ password }) =>
    await props.postResetPassword(password, token);

  const validate = values => {
    const { password, confirmPassword } = values;
    const errors = {};
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
      <div className="top">
        <BackBtn />
      </div>
      <div className="ui container">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              {(!props.passwordWasReset && (
                <Fragment>
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
                </Fragment>
              )) || (
                <Fragment>
                  <SuccessMessage message="Password was reset!" />
                  <Link
                    to="/auth/login"
                    className="ui button primary"
                    style={{ width: "100%", marginTop: "2em" }}
                  >
                    Go to Login
                  </Link>
                </Fragment>
              )}
            </form>
          )}
        />
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  postResetPassword: (newPassword, token) =>
    dispatch({ type: RESET_PASSWORD, payload: { newPassword, token } })
});

const mapStateToProps = ({ auth }) => ({
  passwordWasReset: auth.passwordWasReset
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
