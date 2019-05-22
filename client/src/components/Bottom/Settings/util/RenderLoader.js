import React from "react";
import { connect } from "react-redux";

import Loading from "../../../UtilComponents/Loading";

const RenderLoader = ({ updating, email }) => {
  if (updating) {
    return <Loading message="Saving your settings" />;
  }
  if (!email) {
    return <Loading message="Fetching your info" />;
  }
  return null;
};

const mapStateToProps = ({ auth }) => ({
  updating: auth.user.updating,
  email: auth.user.email
});

export default connect(mapStateToProps)(RenderLoader);
