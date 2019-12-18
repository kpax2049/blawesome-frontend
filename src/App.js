/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Toaster, Position } from '@babel/core';
// import { useStaticRendering } from 'mobx-react-lite';
import ThemeStore from './mobx/ThemeStore';
import UserStore from './mobx/UserStore';
import ToasterStore from './mobx/ToasterStore';
import './App.css';
import Routes from './Routes';

const App = observer(
  class App extends Component {
    state = {
      loading: true,
      isAuthenticated: false,
    };

    componentDidMount() {
      let isAuthenticated = false;

      axios('api/auth')
        .then(response => {
          if (response.status === 200) {
            if (
              response.data.success &&
              response.data.success === 'false'
            ) {
              isAuthenticated = false;
            } else {
              isAuthenticated = true;
              UserStore.setUser(response.data);
            }
          }
          this.userHasAuthenticated(isAuthenticated);
          this.setState({
            loading: false,
          });
        })
        .catch(response => {
          console.info('Error authenticating: ', response);
        });
    }

    userHasAuthenticated = status => {
      this.setState({ isAuthenticated: status });
    };

    logout = () => {
      axios('api/auth/signout', {
        method: 'POST',
      })
        .then(() => {
          this.userHasAuthenticated(false);
          UserStore.setUser(null);
        })
        .catch(response => {
          console.info('Error signing out: ', response);
          this.userHasAuthenticated(false);
        });
    };

    render() {
      const { loading, isAuthenticated } = this.state;

      const childProps = {
        isAuthenticated,
        userHasAuthenticated: this.userHasAuthenticated,
        logout: this.logout,
      };
      return (
        <div
          style={{ flex: 1, display: 'flex' }}
          className={ThemeStore.themeName}
        >
          {!loading && <Routes childProps={childProps} />}
          <Toaster
            ref={r => ToasterStore.registerToaster(r)}
            position={Position.BOTTOM_RIGHT}
          />
        </div>
      );
    }
  }
);

export default withRouter(withCookies(App));
