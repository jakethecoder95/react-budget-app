import "./BudgetOverview.css";
import React from "react";

import Income from "./Income";
import Expences from "./Expences";

const incs = [];
const exps = [];

class IncItem {
  constructor(id, desc, val, month, year) {
    this.id = id;
    this.val = val;
    this.desc = desc;
    this.month = month;
    this.year = year;
  }
}

class ExpItem {
  constructor(id, desc, val, per, type, month, year) {
    this.id = id;
    this.desc = desc;
    this.val = val;
    this.per = per;
    this.type = type;
    this.month = month;
    this.year = year;
  }
}

incs.push(new IncItem(1, "Job", 1500, "March", "2019"));
let exp1 = new ExpItem(1, "Gas", 100, 50, "transportation", "March", "2019");
let exp2 = new ExpItem(2, "Dinner", 50, 50, "dining", "March", "2019");
exps.push(exp1, exp2);

const BudgetOverview = props => {
  return (
    <div className="ui container">
      <div className="overview ui fluid accordion">
        <Income items={incs} />
        <Expences items={exps} />
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
