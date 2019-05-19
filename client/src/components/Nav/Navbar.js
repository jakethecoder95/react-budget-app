import "./Navbar.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";

import AuthBtn from "../Auth/AuthBtn";
import { MOBILE_MENU_SHOW } from "../../redux/types";
import Links from "./Links";

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu">
          {(window.innerWidth > 500 && (
            <Fragment>
              <div className="left menu">
                <Links />
              </div>
              <div className="right menu">
                <AuthBtn />
              </div>
            </Fragment>
          )) || (
            <Fragment>
              <div
                className="menu-btn item"
                onClick={this.props.mobileMenuShow}
              >
                <i className="fa fa-bars" />
              </div>
              <div className="right menu">
                <AuthBtn />
              </div>
            </Fragment>
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
