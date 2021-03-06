import "./CatagoryDetails.css";
import React from "react";
import { connect } from "react-redux";

import ItemExp from "../../Overview/ItemExp";

const CatagoryDetails = props => {
  const {
    selectedCatagory,
    totalExpenses,
    expenseItems,
    deactivateDetails,
    chartData
  } = props;

  const itemsOfSelectedCatagory = () => {
    return Object.keys(expenseItems).filter(
      expense => expenseItems[expense].catagory === selectedCatagory.catagory
    );
  };

  const renderItems = () => {
    return itemsOfSelectedCatagory().map((expense, i) => {
      return (
        <ItemExp
          item={expenseItems[expense]}
          key={expenseItems[expense]._id}
          setTotal={chartData[selectedCatagory.catagory]}
        />
      );
    });
  };

  if (!selectedCatagory) {
    return <div />;
  }

  if (itemsOfSelectedCatagory().length === 0) {
    deactivateDetails();
    return <div />;
  }

  return (
    <div className="details__container">
      <div className="back-icon column" onClick={deactivateDetails}>
        <i className="arrow left icon" />
      </div>
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
            {Math.round(
              (chartData[selectedCatagory.catagory] / totalExpenses) * 100
            )}
            %
          </div>
        </div>
      </div>

      {renderItems()}
    </div>
  );
};

const mapStateToProps = ({ budget }) => ({
  totalExpenses: budget.totalExpenses,
  expenseItems: budget.items.expenseItems,
  chartData: budget.catagoryTotals
});

export default connect(mapStateToProps)(CatagoryDetails);
