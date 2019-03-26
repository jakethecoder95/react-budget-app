import "./Global.css";
import React, { Fragment } from "react";
import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Top />
        <Bottom />
      </Fragment>
    );
  }
}

export default App;
