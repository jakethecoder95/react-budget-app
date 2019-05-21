import "./Settings.css";
import React, { useState } from "react";

import Bio from "./Bio";
import Budget from "./Budget";

const Settings = props => {
  const [active, setActive] = useState("bio");
  const desktopView = window.innerWidth > 770;
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
            {(active === "bio" && <Bio />) || <Budget />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
