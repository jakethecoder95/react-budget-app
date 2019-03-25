import React from "react";
import ItemInc from "./ItemInc";

const Income = props => {
  const renderItems = () => {
    return props.items.map(item => {
      return <ItemInc item={item} key={item.id} />;
    });
  };

  return (
    <div className="income">
      <h3 className="inc-header">Income</h3>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

export default Income;
