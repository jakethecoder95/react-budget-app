import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../../history";

class Links extends Component {
  state = { active: history.location.pathname };

  changeActive = str => {
    this.setState({ active: str });
  };
  render() {
    const { isLoggedIn } = this.props;
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
        {isLoggedIn && (
          <Link
            to="/budget/settings"
            className={`item ${
              this.state.active === "/budget/settings" ? "active" : ""
            }`}
            onClick={() => this.changeActive("/budget/settings")}
          >
            Settings
          </Link>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

export default connect(mapStateToProps)(Links);
