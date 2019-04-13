import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";

const Login = props => {
  const onSubmit = info => {
    console.log(info);
  };

  return (
    <Fragment>
      <div className="top" />
      <div className="ui container">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, pristine, invalid, submitting }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              <h2 className="ui dividing header">Login</h2>
              <div className="field">
                <label>Email</label>
                <Field name="email" component="input" placeholder="Email" />
              </div>
              <div className="field">
                <label>Password</label>
                <Field
                  name="password"
                  component="input"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                disabled={pristine || invalid || submitting}
                className="ui button primary"
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

export default Login;
