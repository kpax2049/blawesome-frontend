/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ route }) => {
  const { component: Component, props: childProps, ...rest } = route;

  return (
    <Route
      {...rest}
      render={props =>
        childProps.isAuthenticated ? (
          <Component {...props} {...childProps} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};
export default AuthenticatedRoute;
