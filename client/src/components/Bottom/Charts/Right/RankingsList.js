import "./RankingsList.css";
import React from "react";
import { connect } from "react-redux";

const RankingsList = props => {
  const catagoryData = [
    {
      type: "misc",
      icon: "fa-question-circle",
      title: "Misc & Checks",
      value: props.chartData.misc
    },
    {
      type: "home",
      icon: "fa-wrench",
      title: "Home & Utilities",
      value: props.chartData.home
    },
    {
      type: "transport",
      icon: "fa-car",
      title: "Transportation",
      value: props.chartData.transport
    },
    {
      type: "groceries",
      icon: "fa-shopping-basket",
      title: "Groceries",
      value: props.chartData.groceries
    },
    {
      type: "insurance",
      icon: "fa-piggy-bank",
      title: "Insurance",
      value: props.chartData.insurance
    },
    {
      type: "dining",
      icon: "fa-utensils",
      title: "Restaurants and Dining",
      value: props.chartData.dining
    },
    {
      type: "entertainment",
      icon: "fa-theater-masks",
      title: "Entertainment",
      value: props.chartData.entertainment
    }
  ];

  const renderRankingsList = () => {
    let items = catagoryData
      .filter(catagory => catagory.value)
      .sort((a, b) => b.value - a.value);
    if (items.length > 0)
      return items.map((item, i) => {
        return (
          <div
            className="row misc__overview"
            key={i}
            onClick={props.activateDetails}
          >
            <div className="icon-div">
              <i className={`fa ${item.icon}`} />
            </div>

            <div className="content-div">
              <div className="title">{item.title}</div>
              <div className="description">
                You spent a total of <b className="misc-exp">${item.value}</b>{" "}
                on Misc & Checks
              </div>
            </div>
          </div>
        );
      });
    else return <div className="empty">No Items</div>;
  };

  return <div className="rankings-list">{renderRankingsList()}</div>;
};

const mapStateToProps = ({ budget }) => ({
  chartData: budget.catagoryTotals
});

export default connect(mapStateToProps)(RankingsList);
