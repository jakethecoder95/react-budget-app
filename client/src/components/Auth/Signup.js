import "./Form.css";
import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

const Signup = props => {
  const onSubmit = userInfo => {
    props.signUp(userInfo);
  };

  return (
    <Fragment>
      <div className="top" />
      <div className="ui container">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, pristine, invalid, submitting }) => (
            <form onSubmit={handleSubmit} className="ui form auth-form">
              <h2 className="ui dividing header">Signup</h2>
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
