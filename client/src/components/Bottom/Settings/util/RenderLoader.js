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

const mapStateToProps = ({ userSettings }) => ({
  updating: userSettings.updating,
  email: userSettings.email
});

export default connect(mapStateToProps)(RenderLoader);
