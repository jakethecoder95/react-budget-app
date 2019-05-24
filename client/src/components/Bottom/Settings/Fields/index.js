import React, { Fragment } from "react";

import SelectType from "./SelectType";
import MonthsAmt from "./MonthsAmt";
import Personalize from "./Personalize";

const Fields = ({ selectedType, setSelectedType, months, setMonths }) => {
  return (
    <Fragment>
      <SelectType selectedType={selectedType} onTypeChange={setSelectedType} />
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
        {selectedType === "personalize" && <Personalize />}
      </div>
      <div className="ui divider" />
    </Fragment>
  );
};

export default Fields;
