import "./CatagoryDetails.css";
import React from "react";
import { connect } from "react-redux";

import ItemExp from "../../Overview/ItemExp";

const CatagoryDetails = props => {
  const { selectedCatagory, totalExpenses } = props;

  const renderItems = () => {
    const { expenseItems } = props;
    const { catagory } = selectedCatagory;
    if (Object.keys(expenseItems).length) {
      return Object.keys(expenseItems)
        .filter(expense => expenseItems[expense].catagory === catagory)
        .map(expense => {
          return (
            <ItemExp
              item={expenseItems[expense]}
              key={expenseItems[expense].id}
            />
          );
        });
    }
  };

  if (!selectedCatagory) {
    return <div />;
  }

  return (
    <div className="details__container">
      <div className="header">
        <div className="row">
          <div className="icon-div">
            <i className={`fa ${selectedCatagory.icon}`} />
          </div>

          <div className="content-div">
            <div className="title">{selectedCatagory.title}</div>
            <div className="description">
              You spent a total of{" "}
              <b className="entertainment-exp">{selectedCatagory.value}</b> on
              Entertainment
            </div>
          </div>
          <div className="percent">
            {Math.round((selectedCatagory.value / totalExpenses) * 100)}%
          </div>
        </div>
      </div>

      {renderItems()}

      <div className="back-icon" onClick={props.deactivateDetails}>
        <i className="fa fa-caret-left" />
      </div>
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  totalExpenses: budget.totalExpenses,
  expenseItems: budget.items.expenseItems
});

export default connect(mapStateToProps)(CatagoryDetails);
