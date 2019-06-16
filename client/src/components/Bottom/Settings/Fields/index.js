import React, { Fragment } from "react";

import SelectType from "./SelectType";
import MonthsAmt from "./MonthsAmt";
import Personalize from "./Personalize";

const Fields = props => {
  return (
    <Fragment>
      <SelectType
        selectedType={props.selectedType}
        onTypeChange={props.setSelectedType}
      />
      <div className="ui divider" />
      <div style={{ margin: "20px 40px" }}>
        {props.selectedType === "month" && (
          <MonthsAmt months={props.months} onValueChange={props.setMonths} />
        )}
        {props.selectedType === "all" && (
          <div className="field">
            All is selected. This means that you will be able to see all your
            budget items you have made since you signed up.
          </div>
        )}
        {props.selectedType === "personalize" && (
          <Personalize
            from={props.from}
            to={props.to}
            setFrom={props.setFrom}
            setTo={props.setTo}
          />
        )}
      </div>
      <div className="ui divider" />
    </Fragment>
  );
};

export default Fields;
