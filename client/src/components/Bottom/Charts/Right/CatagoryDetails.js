import "./CatagoryDetails.css";
import React from "react";

const CatagoryDetails = props => {
  return (
    <div className="details__container">
      <div className="header">
        <div className="row overview-6">
          <div className="icon-div">
            <i className="fa fa-theater-masks" />
          </div>

          <div className="content-div">
            <div className="title">Entertainment</div>
            <div className="description">
              You spent a total of <b className="entertainment-exp">$800.00</b>
              on Entertainment
            </div>
          </div>
          <div className="percent">100%</div>
        </div>
      </div>

      <div className="details">
        <div className="item clearfix entertainment" id="exp-0">
          <div className="item__description">Apartment rent</div>
          <div className="right clearfix">
            <div className="item__value">- 900.00</div>
            <div className="item__percentage">21%</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline" />
              </button>
            </div>
          </div>
        </div>

        <div className="item clearfix entertainment" id="exp-1">
          <div className="item__description">Grocery shopping</div>
          <div className="right clearfix">
            <div className="item__value">- 435.28</div>
            <div className="item__percentage">10%</div>
            <div className="item__delete">
              <button className="item__delete--btn">
                <i className="ion-ios-close-outline" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="back-icon" onClick={props.deactivateDetails}>
        <i className="fa fa-caret-left" />
      </div>
    </div>
  );
};

export default CatagoryDetails;
