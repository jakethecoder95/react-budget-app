import "./Item.css";
import React from "react";

const ItemInc = props => {
  const { item } = props;
  return (
    <div className="item item-inc">
      <div>{item.desc}</div>
      <div className="right">
        <div className="item__value">+ {item.val.toFixed(2)}</div>
        <div className="item__delete">
          <button className="item__delete--btn">
            <i className="ion-ios-close-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemInc;