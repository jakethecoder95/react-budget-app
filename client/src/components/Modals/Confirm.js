import "./Modal.scss";
import React, { Fragment } from "react";

const Confirm = props => {
  const {
    title,
    description,
    yesBtnMessage,
    noBtnMessage,
    yesSaga,
    noSaga
  } = props;

  return (
    <Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
      <button className="ui button primary" onClick={yesSaga}>
        {yesBtnMessage ? "Yes, merge it" : "Yes"}
      </button>
      <button className="ui button red" onClick={noSaga}>
        {noBtnMessage ? "Nah, get rid of it" : "No"}
      </button>
    </Fragment>
  );
};

export default Confirm;
