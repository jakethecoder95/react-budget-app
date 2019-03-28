import "./Item.css";
import React from "react";

const ItemExp = props => {
  const { item } = props;
  return (
    <div className="item item-exp">
      <div>{item.description}</div>
      <div className="right">
        <div className="item__value">- {parseInt(item.value).toFixed(2)}</div>
        <div className="item__percentage">10%</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemExp;
