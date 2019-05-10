import "./Global.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";
import Modals from "./Modals/Modals";
import Auth from "./Auth/Auth";
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
    return (
      <Router history={history}>
        <Switch>
          <Route path="/budget">
            <Top />
            <Bottom />
          </Route>
          <Route path="/auth" component={Auth} />
        </Switch>
      </Router>
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
