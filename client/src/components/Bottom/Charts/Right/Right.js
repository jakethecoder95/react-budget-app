import "./Right.css";
import React from "react";
import RankingsList from "./RankingsList";
import CatagoryDetails from "./CatagoryDetails";

class ChartRight extends React.Component {
  state = { detailsActive: false, selectedCatagory: null /* type object */ };

  activateDetails = selected => {
    this.setState({ detailsActive: true, selectedCatagory: selected });
  };
  deactivateDetails = () => this.setState({ detailsActive: false });

  render() {
    return (
      <div
        className={`chart__right ${
          this.state.detailsActive ? "details-active" : ""
        }`}
      >
        <RankingsList activateDetails={this.activateDetails} />
        <CatagoryDetails
          deactivateDetails={this.deactivateDetails}
          selectedCatagory={this.state.selectedCatagory}
        />
      </div>
    );
  }
}

export default ChartRight;
