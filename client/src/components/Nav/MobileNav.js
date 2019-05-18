import "./MobileNav.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import history from "../../history";
import AuthBtn from "../Auth/AuthBtn";
import { MOBILE_MENU_SHOW, MOBILE_MENU_CLOSE } from "../../redux/types";

class MobileNav extends React.Component {
  state = { active: history.location.pathname };

  render() {
    return ReactDOM.createPortal(
      <div
        className={`mobile-nav_backdrop ui dimmer modals active ${
          this.props.show ? "show" : ""
        }`}
        onClick={this.props.mobileMenuClose}
      >
        <div className="mobile-nav-modal">
          <div className="ui container">
            <div className="ui secondary vertical fluid menu">
              <h1 className="header item">My Budget</h1>
              <div className="links">
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
              <div className="mobile-auth-btns">
                <AuthBtn />
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

const mapDispatchToProps = dispatch => ({
  mobileMenuShow: () => dispatch({ type: MOBILE_MENU_SHOW }),
  mobileMenuClose: () => dispatch({ type: MOBILE_MENU_CLOSE })
});

const mapStateToProps = ({ modals }) => ({
  show: modals.showMobileMenu
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileNav);
