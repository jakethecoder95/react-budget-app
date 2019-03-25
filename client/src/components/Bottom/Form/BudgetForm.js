import "./BudgetForm.css";
import React from "react";

const BudgetForm = props => {
  return (
    <div className="budget-form__container">
      <div className="ui form container budget-form">
        <div className="inline fields">
          <div className="two wide field">
            <select className="ui fluid dropdown">
              <option value="inc">+</option>
              <option value="exp">-</option>
            </select>
          </div>
          <div className="three wide field">
            <select className="ui fluid dropdown">
              <option value="misc">Misc & Checks</option>
              <option value="home">Home & Utilities</option>
              <option value="transport">Transportation</option>
              <option value="groceries">Groceries</option>
              <option value="insurance">Insurance</option>
              <option value="dining">Restaurants and Dining</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>
          <div className="five wide field">
            <input className="add__description" placeholder="Add description" />
          </div>
          <div className="four wide field">
            <input className="add__description" placeholder="value" />
          </div>
          <i className="btn-add ion-ios-checkmark-outline" />
        </div>
      </div>
    </div>
  );
};

export default BudgetForm;
