import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import AuthBtn from "../Auth/AuthBtn";

class Navbar extends React.Component {
  state = { active: history.location.pathname };

  changeActive = str => {
    this.setState({ active: str });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu">
          <div className="left menu">
            <Link
              to="/budget"
              className={`item ${
                this.state.active === "/budget" ? "active" : ""
              }`}
              onClick={() => this.changeActive("/budget")}
            >
              Overview
            </Link>
            <Link
              to="/budget/charts"
              className={`item ${
                this.state.active === "/budget/charts" ? "active" : ""
              }`}
              onClick={() => this.changeActive("/budget/charts")}
            >
              Charts
            </Link>
          </div>
          <div className="right menu">
            <AuthBtn />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
