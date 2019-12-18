import React from 'react';
import { Switch } from 'react-router-dom';
// import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import SignInForm from './signin/SignInForm';

// eslint-disable-next-line react/prop-types
const Routes = ({ childProps }) => {
  return (
    <Switch>
      <UnauthenticatedRoute
        exact
        path="/signin"
        component={SignInForm}
        props={childProps}
      />
      {/* <AuthenticatedRoute path='dashboard-editor' component={} props={childProps}/>
            <AuthenticatedRoute path='dashboard' component={} props={childProps}/> */}
    </Switch>
  );
};

export default Routes;
