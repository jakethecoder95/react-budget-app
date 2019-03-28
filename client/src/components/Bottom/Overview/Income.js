import React from "react";
import { connect } from "react-redux";
import ItemInc from "./ItemInc";
import formatNumber from "../../util/format-number";

const Income = props => {
  const renderItems = () => {
    const { incomeItems } = props;
    if (incomeItems) {
      return Object.keys(incomeItems).map(item => {
        return <ItemInc item={incomeItems[item]} key={incomeItems[item].id} />;
      });
    } else {
      return <div className="empty">EMPTY</div>;
    }
  };

  return (
    <div className="income">
      <div className="inc-header__div">
        <h3 className="inc-header">Income</h3>
        <h3 className="inc-header__amount">
          ${formatNumber(props.totalIncome)}
        </h3>
      </div>
      <div className="items">{renderItems()}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  incomeItems: state.budget.items.incomeItems,
  totalIncome: state.budget.totalIncome
});

export default connect(mapStateToProps)(Income);
