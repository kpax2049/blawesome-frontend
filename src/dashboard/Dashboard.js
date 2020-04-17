import React from 'react';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
// import backgroundImage from '../images/pic.jpg';
import { Dialog, Classes } from '@blueprintjs/core';
import ThemeStore from '../mobx/ThemeStore';

class Dashboard extends React.Component {
  state = {
    username: null,
    password: null,
    loading: false,
    signInFailed: false,
  };

  render() {
    // const { username, password, loading, signInFailed } = this.state;
    return (
      <div className={ThemeStore.themeName}>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
export default withRouter(Dashboard);
