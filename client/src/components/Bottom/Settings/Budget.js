import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import RenderSuccessMessage from "./util/RenderSuccessMessage";
import Fields from "./Fields";

const Budget = props => {
  const [selectedType, setSelectedType] = useState(props.selectedType);
  const [months, setMonths] = useState(props.months);
  const [from, setFrom] = useState(props.from);
  const [to, setTo] = useState(props.to);

  const onSubmit = values => console.log(months);

  const reset = values => {
    setSelectedType(props.selectedType);
    setMonths(props.months);
  };

  return (
    <Fragment>
      <RenderSuccessMessage />
      <div onSubmit={onSubmit} className="ui form">
        <h3>Your Budget Settings</h3>
        <Fields
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          months={months}
          setMonths={setMonths}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
        />
        <button
          type="submit"
          className="ui button"
          style={{ backgroundColor: "#28b9b5", color: "#fff" }}
        >
          Save
        </button>
        <div className="ui button" onClick={reset}>
          Reset
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  selectedType: userSettings.budgetSettings.selectedType,
  months: userSettings.budgetSettings.months,
  from: userSettings.budgetSettings.from,
  to: userSettings.budgetSettings.to
});

export default connect(mapStateToProps)(Budget);
