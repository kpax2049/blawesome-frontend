/* eslint-disable react/no-unused-state */
/* eslint-disable react/state-in-constructor */
import React from "react";
// import axios from 'axios';
// import backgroundImage from '../images/pic.jpg';
import { Dialog, Classes } from "@blueprintjs/core";
import ThemeStore from "../mobx/ThemeStore";

class SignInForm extends React.Component {
  state = {
    username: null,
    password: null,
    loading: false,
    signInFailed: false
  };

  render() {
    // const { username, password, loading, signInFailed } = this.state;

    return (
      <div className="flexbox-stretch" style={{ backgroundColor: "#000" }}>
        <h1>Hello WOrld</h1>
        {/* Background picture
                <div style={{flex: 1, backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}/> */}
        {/* <Dialog className={ThemeStore.themeName} title="Blawesome Sign In">
          <div className={Classes.DIALOG_BODY}>
            <form onSubmit={this.handleSubmit} />
            Hello World
          </div>
        </Dialog> */}
      </div>
    );
  }
}
export default SignInForm;
