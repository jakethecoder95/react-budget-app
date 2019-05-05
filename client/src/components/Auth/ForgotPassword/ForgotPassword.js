import "../Form.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";

import EnterEmail from "./EnterEmail";
import SuccessMessage from "../../UtilComponents/SuccessMessage";
import BackBtn from "../../UtilComponents/BackBtn";

const ForgotPassword = props => {
  const successMessage = `
    We have sent an email to you.
    Please click on the link to confirm a password reset. 
    If you do not see the email, check your spam.
    If it is not their then please try again.
   `;
  return (
    <Fragment>
      <div className="top">
        <BackBtn />
      </div>
      {(props.forgotPasswordResponse.msg === "Success" && (
        <div className="ui form auth-form">
          <SuccessMessage message={successMessage} />
        </div>
      )) || <EnterEmail />}
    </Fragment>
  );

  // return <Fragment>
  // <div className="top">
  //   <BackBtn />
  // </div>
  // <Fragment />
  // if (props.forgotPasswordResponse.msg === "Success") {
  //   return <div>success</div>;
  // }
  // return <EnterEmail />;
};

const mapStateToProps = ({ auth }) => ({
  forgotPasswordResponse: auth.forgotPasswordResponse
});

export default connect(mapStateToProps)(ForgotPassword);
