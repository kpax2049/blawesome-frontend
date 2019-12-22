import React from "react";
import { Switch } from "react-router-dom";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./routes/UnauthenticatedRoute";
import SignInForm from "./signin/SignInForm";
import Dashboard from "./dashboard/Dashboard";
// eslint-disable-next-line react/prop-types
const Routes = ({ childProps }) => {
  console.info("Routes");
  return (
    <Switch>
      <UnauthenticatedRoute
        exact
        path="/signin"
        component={SignInForm}
        props={childProps}
      />
      <AuthenticatedRoute
        path="dashboard-editor"
        component={Dashboard}
        props={childProps}
      />
      <AuthenticatedRoute path="/" component={Dashboard} props={childProps} />
    </Switch>
  );
};

export default Routes;
