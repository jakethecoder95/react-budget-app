import "./Global.css";
import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import { checkLocalStorage } from "../redux/actions";
import history from "../history";

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
