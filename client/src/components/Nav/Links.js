import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import history from "../../history";

class Links extends Component {
  state = { active: history.location.pathname };

  changeActive = str => {
    this.setState({ active: str });
  };
  render() {
    return (
      <Fragment>
        <Link
          to="/budget"
          className={`item ${this.state.active === "/budget" ? "active" : ""}`}
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
      </Fragment>
    );
  }
}

export default Links;
