import React, { Fragment } from "react";
import { Form, Field } from "react-final-form";
import { connect } from "react-redux";

import isEmail from "../../Util/regexEmail";
import { UPDATE_USER_BIO } from "../../../redux/types";
import RenderSuccessMessage from "./util/RenderSuccessMessage";

const Bio = props => {
  const onSubmit = values => props.updateUserBio(values);

  const validate = ({ email, username }) => {
    const errors = {};

    if (!email) {
      errors.email = "Required";
    } else if (!isEmail(email)) {
      errors.email = "Not a valid email";
    }

    if (!username) {
      errors.username = "Required";
    } else if (username.length < 3) {
      errors.username = "Must be longer than 2 characters";
    } else if (username.length > 60) {
      errors.username = "Must be shorter than 60 characters";
    }

    return errors;
  };
  return (
    <Fragment>
      <RenderSuccessMessage />
      <Form
        initialValues={{ email: props.email, username: props.username }}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid, errors, form }) => (
          <form
            onSubmit={values => {
              handleSubmit(values);
              form.reset();
            }}
            className="ui form"
          >
            <div className={`ui field ${errors.email ? "error" : ""}`}>
              <label>
                Email <i>{errors.email ? "*" + errors.email : ""}</i>
              </label>
              <Field
                name="email"
                component="input"
                className="input"
                autoComplete="off"
              />
            </div>
            <div className={`ui field ${errors.username ? "error" : ""}`}>
              <label>
                Username <i>{errors.username ? "*" + errors.username : ""}</i>
              </label>
              <Field
                name="username"
                component="input"
                className="input"
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              disabled={pristine || invalid}
              className="ui button"
              style={{ backgroundColor: "#28b9b5", color: "#fff" }}
            >
              Save
            </button>
            <div className="ui button" onClick={form.reset}>
              Reset
            </div>
          </form>
        )}
      />
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  updateUserBio: values => dispatch({ type: UPDATE_USER_BIO, payload: values })
});

const mapStateToProps = ({ auth }) => ({
  email: auth.user.email,
  username: auth.user.username,
  updating: auth.user.updating,
  updateSuccessfull: auth.user.updateSuccessfull
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bio);
