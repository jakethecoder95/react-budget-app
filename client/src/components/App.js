import "./Global.css";
import React, { Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import history from "../history";
import { INIT_USER_BUDGET } from "../redux/types";

class App extends React.Component {
  componentDidMount() {
    this.props.initUserBudget();
  }

  componentWillUpdate(newProps) {
    if (newProps.isLoggedIn && !this.props.isLoggedIn) {
      this.props.initUserBudget();
    }
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
  initUserBudget: () => dispatch({ type: INIT_USER_BUDGET })
});

const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
