import React from "react";

const RankingsList = props => {
  return (
    <div className="chart__right">
      <div class="row misc__overview">
        <div class="icon-div">
          <i class="fa fa-question-circle" />
        </div>

        <div class="content-div">
          <div class="title">Misc & Checks</div>
          <div class="description">
            You spent a total of <b class="misc-exp">$800.00</b> on Misc &
            Checks
          </div>
        </div>
      </div>

      <div class="row overview-1">
        <div class="icon-div">
          <i class="fa fa-theater-masks" />
        </div>

        <div class="content-div">
          <div class="title">Home & Utilities</div>
          <div class="description">
            You spent a total of <b class="home-exp">$400.00</b> on Home goods
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingsList;
