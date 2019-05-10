import "./Modal.scss"
import React from "react";
import ReactDOM from "react-dom";

import history from "../../history";

const Confirm = ({ yesBtnMessage, noBtnMessage }) => {
  
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
            <h1>Don't loose your work</h1>
            <p>Looks like their is already a budget saved on your browser. When you log in this will be lost. Would you like merge that with budget with your own?</p>
            <button className="ui button primary">{yesBtnMessage ? "Yes, merge it" : "Yes"}</button>
            <button className="ui button red">{noBtnMessage ? "Nah, get rid of it" : "No"}</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Confirm;
