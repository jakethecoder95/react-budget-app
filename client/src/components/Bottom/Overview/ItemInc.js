import "./Item.css";
import React from "react";
import { connect } from "react-redux";

import { DELETE_ITEM } from "../../../redux/types";

const ItemInc = props => {
  const { item } = props;
  return (
<<<<<<< HEAD
    <div className="item item-inc" ontouchstart="">
=======
    <div className="item item-inc" onTouchStart={() => ""}>
>>>>>>> 0aec4b1... test
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

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch({ type: DELETE_ITEM, payload: item })
});

const mapStateToProps = state => ({
  totalIncome: state.budget.totalIncome
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemInc);
