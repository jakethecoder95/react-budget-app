import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import Confirm from "./Confirm";
import history from "../../history";
import { MERGE_BUDGET_NO, MERGE_BUDGET_YES } from "../../redux/types";

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
      yesSaga={this.props.mergeBudgetYes}
      noSaga={this.props.mergeBudgetNo}
    />
  );

  render() {
    const { mergeBudgetConfirm, showModal } = this.props;

    if (showModal) {
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
              <div className="modal">
                {mergeBudgetConfirm && this.confirmMergeLocalStorage}
              </div>
            </div>
          </div>
        </div>,
        document.querySelector("#modal")
      );
    }

    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  mergeBudgetYes: () => dispatch({ type: MERGE_BUDGET_YES }),
  mergeBudgetNo: () => dispatch({ type: MERGE_BUDGET_NO })
});

const mapStateToProps = ({ modals }) => ({
  showModal: modals.showModal,
  mergeBudgetConfirm: modals.mergeBudgetConfirm
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modals);
