import React, { Fragment } from "react";
import { Field } from "react-final-form";

const SelectType = props => {
  const mobileView = window.innerWidth < 500;
  return (
    <Fragment>
      {mobileView && <h4 htmlFor="selectType">Select what type you want: </h4>}
      <div className="inline fields">
        {!mobileView && (
          <label htmlFor="selectType">Select what type you want: </label>
        )}
        <div className="field">
          <div className="ui radio checkbox">
            <Field
              component="input"
              type="radio"
              name="selectedType"
              value="month"
            />
            <label>Month</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <Field
              component="input"
              type="radio"
              name="selectedType"
              value="all"
            />
            <label>All</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
            <Field
              component="input"
              type="radio"
              name="selectedType"
              value="personalize"
            />
            <label>Personalize</label>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectType;
