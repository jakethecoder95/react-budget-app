import React from "react";
import ItemExp from "./ItemExp";

const Expences = props => {
  const renderItems = () => {
    return props.items.map(item => {
      return <ItemExp item={item} key={item.id} />;
    });
  };
  return (
    <div className="expences">
      <h3 className="exp-header">Expences</h3>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

export default Expences;
