import React from "react";

const ItemInc = props => {
  const { item } = props;
  return (
    <div className="item item-inc">
      <div>{item.desc}</div>
      <div className="item__value">+ {item.val}</div>
    </div>
  );
};

export default ItemInc;
