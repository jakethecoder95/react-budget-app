import "./Right.css";
import React from "react";
import RankingsList from "./RankingsList";
import CatagoryDetails from "./CatagoryDetails";

class ChartRight extends React.Component {
  state = { detailsActive: false };

  activateDetails = () => this.setState({ detailsActive: true });
  deactivateDetails = () => this.setState({ detailsActive: false });

  render() {
    return (
      <div
        class={`chart__right ${
          this.state.detailsActive ? "details-active" : ""
        }`}
      >
        <RankingsList activateDetails={this.activateDetails} />
        <CatagoryDetails deactivateDetails={this.deactivateDetails} />
      </div>
    );
  }
}

export default ChartRight;
