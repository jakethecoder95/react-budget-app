import React from "react";
import ReactDOM from "react-dom";

import Confirm from "./Confirm";
import history from "../../history";

class Modals extends React.Component {
  state = { show: true };

  confirmMergeLocalStorage = (
    <Confirm
      title="Don't loose your work!"
      description="Looks like their is already a budget saved on your browser.
  When you log in this will be lost. Would you like merge that
  with budget with your own?"
      yesBtnMessage="Yes, merge it"
      noBtnMessage="Nah, get rid of it"
    />
  );

  render() {
    if (this.state.show) {
      return ReactDOM.createPortal(
        <div className="modal__container">
          <div
            className="ui dimmer modals visible active"
            onClick={() => history.goBack()}
          >
            <div
              className="standard modal visible active"
              onClick={e => e.stopPropagation()}
            >
              <div className="modal">{this.confirmMergeLocalStorage}</div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      );
    }

    return null;
  }
}

export default Modals;
