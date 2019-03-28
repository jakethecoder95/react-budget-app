import React from "react";
import { connect } from "react-redux";
import ItemExp from "./ItemExp";
import formatNumber from "../../util/format-number";

const Expences = props => {
  const renderItems = () => {
    const { expenseItems } = props;
    if (expenseItems) {
      return Object.keys(expenseItems).map(item => {
        return (
          <ItemExp item={expenseItems[item]} key={expenseItems[item].id} />
        );
      });
    } else {
      return <div className="empty">EMPTY</div>;
    }
  };
  return (
    <div className="expenses">
      <div className="exp-header__div">
        <h3 className="exp-header">Expenses</h3>
        <h3 className="exp-header__amount">
          ${formatNumber(props.totalExpenses)}
        </h3>
      </div>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  expenseItems: state.budget.items.expenseItems,
  totalExpenses: state.budget.totalExpenses
});

export default connect(mapStateToProps)(Expences);
