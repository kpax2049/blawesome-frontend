/* eslint-disable no-useless-escape */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-param-reassign */
/* eslint-disable vars-on-top */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  // eslint-disable-next-line no-var
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.href);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const UnauthenticatedRoute = ({ route }) => {
  const { component: Component, props: childProps, ...rest } = route;
  const redirect = getUrlParameter('redirect');

  return (
    <Route
      {...rest}
      render={props =>
        !childProps.isAuthenticated ? (
          <Component {...props} {...childProps} />
        ) : (
          <Redirect
            to={redirect === '' || !redirect ? '/' : redirect}
          />
        )
      }
    />
  );
};
export default UnauthenticatedRoute;
