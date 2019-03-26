import React from "react";

const ItemExp = props => {
  const { item } = props;
  return (
    <div className="item item-exp">
      <div>{item.desc}</div>
      <div className="right">
        <div className="item__value">- {item.val}</div>
        <div className="item__percentage">{item.per}%</div>
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
