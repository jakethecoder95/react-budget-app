import "./Global.css";
import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import history from "../history";
import { CHECK_LOCAL_STORAGE } from "../redux/types";

class App extends React.Component {
  componentDidMount() {
    this.props.checkLocalStorage();
  }

  render() {
    const location = history.location.pathname;
    history.location.pathname = location === "/" ? "/budget" : location;
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            <Route path="/budget">
              <Top />
              <Bottom />
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
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
