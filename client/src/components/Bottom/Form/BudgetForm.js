import "./BudgetForm.css";
import "./MobileForm.css";
import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import { bindActionCreators } from "redux";

import SelectTypes from "./Fields/SelectTypes";
import SelectCatagories from "./Fields/SelectCatagories";
import InputDescription from "./Fields/InputDescription";
import InputValue from "./Fields/InputValue";
import { addItem } from "../../../redux/actions";
import history from "../../../history";

class BudgetForm extends React.Component {
  state = { selectedType: "inc", selectedCatagory: "misc" };

  onTypeChange = type => this.setState({ selectedType: type });
  onCatagoryChange = cat => this.setState({ selectedCatagory: cat });

  checkHistory = () => {
    if (history.location.pathname === "/mobile-form") {
      history.goBack();
    }
  };

  getNewId = items => {
    let newId;
    const keys = Object.keys(items);
    if (keys.length > 0) {
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
    item.date = new Date().toISOString();
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
              type: this.state.selectedType,
              catagory: this.state.selectedCatagory
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
                  selectedType={this.state.selectedType}
                />
                <Field
                  name="catagory"
                  component={SelectCatagories}
                  catagoryClass={catagoryClass}
                  onCatagoryChange={this.onCatagoryChange}
                  selectedType={this.state.selectedType}
                  selectedCatagory={this.state.selectedCatagory}
                />
                <Field
                  name="description"
                  component={InputDescription}
                  selectedType={this.state.selectedType}
                />
                <Field
                  name="value"
                  component={InputValue}
                  selectedType={this.state.selectedType}
                />
                {this.props.mobile && (
                  <button className="ui button">Submit</button>
                )}
                {!this.props.mobile && (
                  <button
                    className="add__btn"
                    type="submit"
                    disabled={submitting}
                    style={{
                      color:
                        this.state.selectedType === "inc"
                          ? "#28b9b5"
                          : "#ff5049"
                    }}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem
    },
    dispatch
  );

const mapStateToProps = state => ({
  incomeItems: state.budget.items.incomeItems,
  expenseItems: state.budget.items.expenseItems
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetForm);
