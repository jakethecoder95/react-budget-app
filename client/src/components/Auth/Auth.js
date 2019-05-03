import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "../../history";

import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

const Auth = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/login" exact component={Login} />
        <Route path="/auth/signup" exact component={Signup} />
        <Route path="/auth/forgot-password" exact component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

export default Auth;
