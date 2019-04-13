import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";
import hasError from "../Bottom/Form/util/has-error";

const Signup = props => {
  const onSubmit = userInfo => {
    props.signUp(userInfo);
  };

  const hasError = meta => {
    console.log(meta);
    return "field ui error";
  };

  const validate = ({ username, email, password }) => {
    const errors = {};
    if (!username) {
      errors.username = "Required";
    }
    if (!email) {
      errors.email = "Required";
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
                <div className="field">
                  <label>Username</label>
                  <Field
                    name="username"
                    component="input"
                    placeholder="Username"
                  />
                </div>
                <div className="field">
                  <label>Email</label>
                  <Field name="email" component="input" placeholder="Email" />
                </div>
                <Field
                  name="password"
                  render={({ meta, input }) => (
                    <div className="field ui error">
                      <label>Password</label>
                      <input
                        component="input"
                        placeholder="Password"
                        type="password"
                        {...input}
                      />
                      {errors.password && (
                        <p className="ui red message mini">{errors.password}</p>
                      )}
                    </div>
                  )}
                />
              </div>
              <button
                type="submit"
                disabled={pristine || invalid || submitting}
                className="ui button primary"
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
  signUp: userInfo => dispatch({ type: "SIGNUP", payload: userInfo })
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
