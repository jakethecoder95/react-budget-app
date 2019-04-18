import "./Global.css";
import React, { Fragment } from "react";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import { CHECK_LOCAL_STORAGE } from "../redux/types";

class App extends React.Component {
  componentDidMount() {
    this.props.checkLocalStorage();
  }

  render() {
    return (
      <Fragment>
        <Top />
        <Bottom />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkLocalStorage: () => dispatch({ type: CHECK_LOCAL_STORAGE })
});

export default connect(
  null,
  mapDispatchToProps
)(App);
