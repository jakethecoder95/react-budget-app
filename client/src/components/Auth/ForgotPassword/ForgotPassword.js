import React, { Fragment } from "react";
import { connect } from "react-redux";

import EnterEmail from "./EnterEmail";
import EnterPin from "./EnterPin";
import BackBtn from "../../UtilComponents/BackBtn";

const ForgotPassword = props => {
  return (
    <Fragment>
      <div className="top">
        <BackBtn />
      </div>
      {(props.forgotPasswordResponse.msg === "Success" && <EnterPin />) || (
        <EnterEmail />
      )}
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
