import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import RenderSuccessMessage from "./util/RenderSuccessMessage";
import SelectType from "./Fields/SelectType";
import MonthsAmt from "./Fields/MonthsAmt";

const Budget = props => {
  const [selectedType, setSelectedType] = useState(props.selectedType);
  const [months, setMonths] = useState(props.months);

  const onSubmit = values => console.log(months);

  const reset = values => {
    setSelectedType(props.selectedType);
    setMonths(props.months);
  };

  return (
    <Fragment>
      <RenderSuccessMessage />
      <form onSubmit={onSubmit} className="ui form">
        <SelectType
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
        <div className="ui divider" />
        <div style={{ margin: "20px 40px" }}>
          {selectedType === "month" && (
            <MonthsAmt months={months} onValueChange={setMonths} />
          )}
          {selectedType === "all" && (
            <div className="field">
              All is selected. This means that you will be able to see all your
              budget items you have made since you signed up.
            </div>
          )}
        </div>
        <div className="ui divider" />
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
      </form>
    </Fragment>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  selectedType: userSettings.budgetSettings.selectedType,
  months: userSettings.budgetSettings.months
});

export default connect(mapStateToProps)(Budget);
