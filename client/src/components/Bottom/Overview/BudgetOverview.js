import "./BudgetOverview.css";
import React from "react";

import Income from "./Income";
import Expences from "./Expences";

const BudgetOverview = props => {
  return (
    <div className="ui container">
      <div className="overview ui fluid accordion">
        <Income />
        <Expences />
      </div>
    </div>
  );
};

export default BudgetOverview;

const jsx = (
  <div class="item clearfix" id="inc-0">
    <div class="item__description">Job</div>
    <div class="right clearfix">
      <div class="item__value">+ 1,500.00</div>
      <div class="item__delete">
        <button class="item__delete--btn">
          <i class="ion-ios-close-outline" />
        </button>
      </div>
    </div>
  </div>
);
