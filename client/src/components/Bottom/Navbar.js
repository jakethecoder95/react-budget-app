import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import history from "../../history";

class Navbar extends React.Component {
  state = { active: history.location.pathname };

  changeActive = str => {
    this.setState({ active: str });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu">
          <Link
            to="/"
            className={`item ${this.state.active === "/" ? "active" : ""}`}
            onClick={() => this.changeActive("/")}
          >
            Overview
          </Link>
          <Link
            to="/charts"
            className={`item ${
              this.state.active === "/charts" ? "active" : ""
            }`}
            onClick={() => this.changeActive("/charts")}
          >
            Charts
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
