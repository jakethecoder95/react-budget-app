import React from "react";

const ItemExp = props => {
  const { item } = props;
  return (
    <div className="item item-exp">
      <div>{item.desc}</div>
      <div className="item__value">- {item.val}</div>
    </div>
  );
};

export default ItemExp;
