import "./Settings.scss";
import React, { useState } from "react";
import { connect } from "react-redux";

import Bio from "./Bio";
import Budget from "./Budget";
import RenderLoader from "./util/RenderLoader";

const Settings = props => {
  const [active, setActive] = useState("bio");
  const desktopView = window.innerWidth > 992;
  return (
    <div className="settings-menu">
      <div className={`ui container ${desktopView ? "grid" : ""}`}>
        <div className="four wide column">
          <div
            className={`ui ${
              desktopView ? "secondary vertical" : "tabular"
            } menu`}
          >
            <div
              className={`item ${active === "bio" ? "active" : ""}`}
              onClick={() => setActive("bio")}
            >
              My Bio
            </div>
            <div
              className={`item ${active === "budget" ? "active" : ""}`}
              onClick={() => setActive("budget")}
            >
              Budget
            </div>
          </div>
        </div>
        <div className="twelve wide stretched column">
          <div className="ui segment">
            <RenderLoader />
            {(active === "bio" && <Bio />) || <Budget />}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, userSettings }) => ({
  isLoggedIn: auth.isLoggedIn,
  updating: userSettings.updating
});

export default connect(mapStateToProps)(Settings);
