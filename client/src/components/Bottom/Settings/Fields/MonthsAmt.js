import React, { Fragment } from "react";
import { connect } from "react-redux";

const MonthsAmt = ({ months, increment, decrement }) => {
  const mobileView = window.innerWidth < 500;
  return (
    <Fragment>
      {mobileView && <label>Select how many months:</label>}
      <div className="ui inline fields">
        {!mobileView && <label>Select how many months:</label>}
        <br />
        <input
          name="months"
          className="input"
          style={{ maxWidth: "50px" }}
          value={months}
          disabled
        />
        <div className="field">
          <div
            className="circular ui icon button"
            style={{ fontSize: ".65rem", marginLeft: "25px" }}
            onClick={decrement}
          >
            <i className="icon minus" />
          </div>
          <div
            className="circular ui icon button"
            style={{ fontSize: ".65rem" }}
            onClick={increment}
          >
            <i className="icon plus" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  value: userSettings.budgetSettings.months
});

export default connect(mapStateToProps)(MonthsAmt);
