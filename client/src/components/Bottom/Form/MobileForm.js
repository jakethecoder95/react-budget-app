import React from "react";
import ReactDOM from "react-dom";

import BudgetForm from "./BudgetForm";
import history from "../../../history";

const MobileForm = () => {
  return ReactDOM.createPortal(
    <div className="mobile-form__container">
      <div
        className="ui dimmer modals visible active"
        onClick={() => history.goBack()}
      >
        <div
          className="standard modal visible active mobile-form"
          onClick={e => e.stopPropagation()}
        >
          <BudgetForm mobile />
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default MobileForm;
