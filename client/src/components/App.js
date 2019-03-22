import React, { Fragment } from "react";
import Top from "./Top";
import Bottom from "./Bottom";

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
