import "./Item.css";
import React from "react";
import { connect } from "react-redux";

import Percentage from "../../Util/Percentage";
import { deleteItem } from "../../../actions";

const ItemExp = props => {
  const { item } = props;
  return (
    <div className="item item-exp">
      <div>{item.description}</div>
      <div className="right">
        <div className="item__value">- {item.value.toFixed(2)}</div>
        <Percentage value={item.value} total={props.totalExpenses} />
        <div className="item__delete">
          <button
            className="item__delete--btn"
            onClick={() => props.deleteItem(item)}
          >
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  totalExpenses: state.budget.totalExpenses
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(ItemExp);
