import "./Item.css";
import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "../../../actions";

const ItemInc = props => {
  const { item } = props;
  return (
    <div className="item item-inc">
      <div>{item.description}</div>
      <div className="right">
        <div className="item__value">+ {item.value.toFixed(2)}</div>
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
  totalIncome: state.budget.totalIncome
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(ItemInc);
