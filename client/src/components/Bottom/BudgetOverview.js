import "./BudgetOverview.css";
import React from "react";

const BudgetOverview = props => {
  return (
    <div className="ui container">
      <div className="overview">
        <div className="income">
          <div className="overview__section-header">
            <i className="dropdown icon" />
            <h3 className="inc-header">Income</h3>
          </div>
          <div items>
            <div className="item item-inc">
              <div>Income</div>
              <div>$1,500.00</div>
            </div>
          </div>
        </div>
        <div className="expences">
          <h3 className="exp-header">Expences</h3>
          <div classname="items">
            <div className="item item-exp">
              <div>Gas</div>
              <div>$45.00</div>
            </div>
            <div className="item item-exp">
              <div>Gas</div>
              <div>$45.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
