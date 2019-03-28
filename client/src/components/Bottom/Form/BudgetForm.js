import "./BudgetForm.css";
import "./MobileForm.css";
import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";

import SelectTypes from "./Fields/SelectTypes";
import SelectCatagories from "./Fields/SelectCatagories";
import InputDescription from "./Fields/InputDescription";
import InputValue from "./Fields/InputValue";
import { addItem } from "../../../actions";
import history from "../../../history";

class BudgetForm extends React.Component {
  state = { selectedType: "inc" };

  onTypeChange = type => this.setState({ selectedType: type });

  checkHistory = () => {
    if (history.location.pathname === "/mobile-form") {
      history.goBack();
    }
  };

  getNewId = items => {
    let newId;
    if (items) {
      const keys = Object.keys(items);
      newId = parseInt(keys[keys.length - 1]) + 1;
    } else {
      newId = 0;
    }
    return newId;
  };

  onSubmit = item => {
    const { incomeItems, expenseItems } = this.props;
    const itemId =
      item.type === "inc"
        ? this.getNewId(incomeItems)
        : this.getNewId(expenseItems);
    if (item.type === "exp") {
      item.catagory = item.catagory || "misc";
    }
    item.id = itemId;
    item.value = Number(item.value);
    this.props.addItem(item);
    this.checkHistory();
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
            }}
            validate={({ description, value }) => {
              const errors = {};
              if (!description) {
                errors.description = "Required";
              }
              if (!value) {
                errors.value = "Required";
              }
              return errors;
            }}
            submitSucceeded
            onSubmit={this.onSubmit}
            render={({ handleSubmit, form, values, submitting }) => (
              <form
                onSubmit={e => {
                  handleSubmit(e);
                  if (values.description && values.value) {
                    form.reset();
                  }
                }}
                className="inline fields budget-form"
              >
                <h2 className="mobile-form__header">Add an Item</h2>
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
                <Field name="description" component={InputDescription} />
                <Field name="value" component={InputValue} />
                {this.props.mobile && (
                  <button className="ui button">Submit</button>
                )}
                {!this.props.mobile && (
                  <button
                    className="add__btn"
                    type="submit"
                    disabled={submitting}
                  >
                    <i className="ion-ios-checkmark-outline" />
                  </button>
                )}
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incomeItems: state.budget.items.incomeItems,
  expenseItems: state.budget.items.expenseItems
});

export default connect(
  mapStateToProps,
  { addItem }
)(BudgetForm);
