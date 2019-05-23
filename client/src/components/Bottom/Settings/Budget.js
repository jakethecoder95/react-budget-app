import React, { Fragment, useState } from "react";
import { Form } from "react-final-form";
import { connect } from "react-redux";

import RenderSuccessMessage from "./util/RenderSuccessMessage";
import SelectType from "./Fields/SelectType";
import MonthsAmt from "./Fields/MonthsAmt";

const Budget = props => {
  const [months, setMonths] = useState(props.months);

  const onIncrementValue = () => setMonths(months + 1);
  const onDecrementValue = () => setMonths(months > 1 ? months - 1 : months);

  const onSubmit = values => console.log(months);

  const validate = values => {
    const errors = {};

    return errors;
  };

  return (
    <Fragment>
      <RenderSuccessMessage />
      <Form
        initialValues={{
          selectedType: props.selectedType
        }}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, invalid, form, values }) => (
          <form
            onSubmit={values => {
              handleSubmit(values);
              form.reset();
            }}
            className="ui form"
          >
            <SelectType />
            <div className="ui divider" />
            <div style={{ margin: "20px 40px" }}>
              {values.selectedType === "month" && (
                <MonthsAmt
                  months={months}
                  increment={onIncrementValue}
                  decrement={onDecrementValue}
                />
              )}

              {values.selectedType === "all" && (
                <div className="field">
                  All is selected. This means that you will be able to see all
                  your budget items you have made since you signed up.
                </div>
              )}
            </div>
            <div className="ui divider" />
            <button
              type="submit"
              disabled={invalid}
              className="ui button"
              style={{ backgroundColor: "#28b9b5", color: "#fff" }}
            >
              Save
            </button>
            <div className="ui button" onClick={form.reset}>
              Reset
            </div>
          </form>
        )}
      />
    </Fragment>
  );
};

const mapStateToProps = ({ userSettings }) => ({
  selectedType: userSettings.budgetSettings.selectedType,
  months: userSettings.budgetSettings.months
});

export default connect(mapStateToProps)(Budget);
