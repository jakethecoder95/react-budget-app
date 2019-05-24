import "./BudgetForm.css";
import "./MobileForm.css";
import React from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";

import SelectTypes from "./Fields/SelectTypes";
import SelectCatagories from "./Fields/SelectCatagories";
import InputDescription from "./Fields/InputDescription";
import InputValue from "./Fields/InputValue";
import { ADD_ITEM } from "../../../redux/types";
import history from "../../../history";

class BudgetForm extends React.Component {
  state = {
    selectedType: "inc",
    selectedCatagory: "misc",
    selectedPersist: false
  };

  onTypeChange = selectedType => this.setState({ selectedType });
  onCatagoryChange = selectedCatagory => this.setState({ selectedCatagory });
  onPersistChange = selectedPersist => this.setState({ selectedPersist });

  checkHistory = () => {
    if (history.location.pathname === "/mobile-form") {
      history.goBack();
    }
  };

  getNewId = items => {
    let newId;
    const keys = Object.values(items);
    if (keys.length > 0) {
      newId = parseInt(keys[keys.length - 1]._id) + 1;
    } else {
      newId = 0;
    }
    return newId;
  };

  onSubmit = item => {
    if (!this.props.isLoggedIn) {
      const { incomeItems, expenseItems } = this.props;
      const itemId =
        item.type === "inc"
          ? this.getNewId(incomeItems)
          : this.getNewId(expenseItems);

      item._id = itemId;
    }
    item.date = new Date().toISOString();
    item.value = Number(item.value);

    this.setState({
      selectedCatagory: item.catagory,
      selectedType: item.type,
      selectedPersist: item.persist
    });

    this.props.addItem(item);
    this.checkHistory();
  };

  validate = ({ description, value }) => {
    const errors = {};
    if (!description) {
      errors.description = "Required";
    }
    if (!value) {
      errors.value = "Required";
    }
    return errors;
  };

  render() {
    return (
      <div className="budget-form__container">
        <div className="ui form container">
          {this.props.mobile && (
            <div
              className="x-icon ion-ios-close-outline"
              onClick={history.goBack}
            />
          )}
          <Form
            validate={this.validate}
            submitSucceeded
            initialValues={{
              type: this.state.selectedType,
              catagory: this.state.selectedCatagory,
              persist: this.state.selectedPersist
            }}
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
                  selectedType={values.type}
                />
                {values.type === "exp" && (
                  <Field
                    name="catagory"
                    component={SelectCatagories}
                    selectedType={values.type}
                  />
                )}

                <Field
                  name="description"
                  component={InputDescription}
                  selectedType={values.type}
                />
                <Field
                  name="value"
                  component={InputValue}
                  selectedType={values.type}
                />
                <div className="two wide field" style={{ margin: "1em 0" }}>
                  <label
                    style={{ display: "block" }}
                    className="checkbox-label"
                  >
                    Monthly:
                  </label>
                  <Field
                    name="persist"
                    component="input"
                    className="checkbox"
                    type="checkbox"
                  />
                </div>
                {this.props.mobile && (
                  <button
                    className="ui button"
                    type="submit"
                    disabled={submitting}
                  >
                    Submit
                  </button>
                )}
                {!this.props.mobile && (
                  <button
                    className="add__btn"
                    type="submit"
                    disabled={submitting}
                    style={{
                      color: values.type === "inc" ? "#28b9b5" : "#ff5049"
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

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch({ type: ADD_ITEM, payload: item })
});

const mapStateToProps = ({ budget, auth }) => ({
  incomeItems: budget.items.incomeItems,
  expenseItems: budget.items.expenseItems,
  isLoggedIn: auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetForm);
