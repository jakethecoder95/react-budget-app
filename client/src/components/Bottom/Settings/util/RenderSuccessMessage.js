import React, { useState } from "react";
import { connect } from "react-redux";

import { UPDATE_SETTINGS_RESET } from "../../../../redux/types";

const RenderSuccessMessage = props => {
  const [display, setDisplay] = useState(false);

  if (props.updateSuccessfull && !display) {
    setDisplay(true);
  }
  if (!props.updateSuccessfull && display) {
    setDisplay(false);
  }
  if (!display) {
    return null;
  }

  return (
    <div className="ui success message">
      <i onClick={props.resetSettingsRedux} className="close icon" />
      <div>Your settings were updated!</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  resetSettingsRedux: () => dispatch({ type: UPDATE_SETTINGS_RESET })
});

const mapStateToProps = ({ userSettings }) => ({
  updateSuccessfull: userSettings.updateSuccessfull
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderSuccessMessage);
