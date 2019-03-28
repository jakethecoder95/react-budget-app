import React from "react";
import { connect } from "react-redux";
import ItemInc from "./ItemInc";

const Income = props => {
  const renderItems = () => {
    const { incomeItems } = props;
    if (incomeItems) {
      return Object.keys(incomeItems).map(item => {
        return <ItemInc item={incomeItems[item]} key={incomeItems[item].id} />;
      });
    }
  };

  return (
    <div className="income">
      <h3 className="inc-header">Income</h3>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  incomeItems: state.budget.items.incomeItems
});

export default connect(mapStateToProps)(Income);
