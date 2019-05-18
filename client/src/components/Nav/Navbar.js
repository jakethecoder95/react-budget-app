import "./Navbar.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../../history";
import AuthBtn from "../Auth/AuthBtn";
import { MOBILE_MENU_SHOW } from "../../redux/types";

class Navbar extends React.Component {
  state = { active: history.location.pathname };

  changeActive = str => {
    this.setState({ active: str });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu">
          {(window.innerWidth > 500 && (
            <Fragment>
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
            </Fragment>
          )) || (
            <div className="menu-btn item" onClick={this.props.mobileMenuShow}>
              <div className="ui button primary">
                <i className="fa fa-bars" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  mobileMenuShow: () => dispatch({ type: MOBILE_MENU_SHOW })
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
