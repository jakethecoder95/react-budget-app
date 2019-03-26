import "./BudgetForm.css";
import React from "react";
import { Form, Field } from "react-final-form";

import SelectTypes from "./Fields/SelectTypes";
import SelectCatagories from "./Fields/SelectCatagories";
import InputDescription from "./Fields/InputDescription";
import InputValue from "./Fields/InputValue";

class BudgetForm extends React.Component {
  state = { selectedType: "inc" };

  onSubmit = item => {
    console.log(item); // TODO: Insert action creator
  };

  onTypeChange = type => this.setState({ selectedType: type });

  isEmpty = value => {
    if (!value) {
      return "Field is required";
    }
    return undefined;
  };

  render() {
    const catagoryClass =
      this.state.selectedType === "inc" ? "display-none" : "";

    return (
      <div className="budget-form__container">
        <div className="ui form container">
          <Form
            initialValues={{
              type: this.state.selectedType
              // Handle unselected catagory in this.onSubmit
            }}
            onSubmit={this.onSubmit}
            render={({ handleSubmit, invalid }) => (
              <form
                onSubmit={handleSubmit}
                className="inline fields budget-form"
              >
                <Field
                  name="type"
                  component={SelectTypes}
                  onTypeChange={this.onTypeChange}
                />
                <Field
                  name="catagory"
                  component={SelectCatagories}
                  catagoryClass={catagoryClass}
                />
                <Field
                  name="description"
                  component={InputDescription}
                  validate={this.isEmpty}
                />
                <Field
                  name="value"
                  component={InputValue}
                  validate={this.isEmpty}
                />
                <button className="add__btn">
                  <i className="ion-ios-checkmark-outline" />
                </button>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default BudgetForm;
