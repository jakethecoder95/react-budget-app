import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { FORGOT_PASSWORD } from "../../redux/types";
import AuthField from "./AuthField";
import BackBtn from "../UtilComponents/BackBtn";
import isEmail from "../Util/regexEmail";

const ForgotPassword = props => {
  if (props.isLoggedIn) {
    return <Redirect to="/budget" />;
  }

  const authField = props => <AuthField {...props} displayLabel={false} />;

  const onSubmit = async ({ email }) => await props.postForgotPassword(email);

  const validate = values => {
    const { email } = values;
    const errors = {};
    // // Async errors
    // const { loginResponse } = props;
    // if (loginResponse.data) {
    //   if (
    //     loginResponse.status === 401 &&
    //     values[loginResponse.data.param] === loginResponse.data.value
    //   ) {
    //     errors[loginResponse.data.param] = loginResponse.data.msg;
    //   }
    // }
    if (!email) {
      errors.email = "Required";
    } else if (!isEmail(email)) {
      errors.email = "Please enter a valid email";
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
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  postForgotPassword: email =>
    dispatch({ type: FORGOT_PASSWORD, payload: email })
});

const mapStateToProps = ({ auth }) => ({
  forgotPasswordResponse: auth.forgotPasswordResponse,
  isLoggedIn: auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
