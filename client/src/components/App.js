import "./Global.css";
import React, { Fragment } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import { checkLocalStorage } from "../redux/actions";

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkLocalStorage
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(App);
