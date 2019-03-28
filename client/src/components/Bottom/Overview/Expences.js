import React from "react";
import { connect } from "react-redux";
import ItemExp from "./ItemExp";

const Expences = props => {
  const renderItems = () => {
    const { expenseItems } = props;
    if (expenseItems) {
      return Object.keys(expenseItems).map(item => {
        return (
          <ItemExp item={expenseItems[item]} key={expenseItems[item].id} />
        );
      });
    }
  };
  return (
    <div className="expenses">
      <h3 className="exp-header">Expences</h3>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  expenseItems: state.items.expenseItems
});

export default connect(mapStateToProps)(Expences);
