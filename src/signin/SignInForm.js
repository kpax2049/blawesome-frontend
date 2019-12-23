import React from 'react';
// import backgroundImage from '../images/pic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Dialog,
  Button,
  Classes,
  Hotkey,
  Hotkeys,
  FormGroup,
  InputGroup,
  Tag,
  Intent,
} from '@blueprintjs/core';
import { HotkeysTarget } from '@blueprintjs/core/lib/esnext/components/hotkeys/hotkeysTarget.js';
import ThemeStore from '../mobx/ThemeStore';
import axios from 'axios';

class SignInForm extends React.Component {
  state = {
    username: '',
    password: '',
    loading: false,
    signInFailed: false,
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignIn = () => {
    const { username, password } = this.state;
    if (!username.length) {
      return;
    }
    if (!password.length) {
      return;
    }

    this.setState({ signInFailed: false, loading: true });
    axios('api/auth', {
      method: 'post',
      data: { username, password },
    })
      .then(response => {
        this.setState({ loading: false });
        if (response.data.success) {
          debugger;
          window.location.reload();
        } else {
          this.setState({ signInFailed: true });
        }
      })
      .catch(() => {
        this.setState({ loading: false, signInFailed: true });
      });
  };
  renderHotkeys() {
    return (
      <Hotkeys>
        <Hotkey
          allowInInput
          combo="enter"
          onKeyDown={this.onSignIn}
        />
      </Hotkeys>
    );
  }
  render() {
    const { username, password, loading, signInFailed } = this.state;

    return (
      <div
        className="flexbox-stretch"
        style={{ backgroundColor: '#333' }}
      >
        {/* Background picture
                <div style={{flex: 1, backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: 'cover', backgroundPosition: 'center'}}/> */}
        <Dialog
          className={ThemeStore.themeName}
          title="Blawesome Sign In"
          isOpen
          autoFocus
          usePortal
          enforceFocus
          isCloseButtonShown={false}
          canEscapeKeyClose={false}
          canOutsideClickClose={false}
          onClose={this.props.onClose}
          style={{ width: 250 }}
        >
          <div className={Classes.DIALOG_BODY}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <InputGroup
                  id="username"
                  name="username"
                  value={username || ''}
                  fill
                  autoFocus={true}
                  autoComplete="off"
                  onChange={this.handleChange}
                  placeholder="username"
                />
              </FormGroup>
              <FormGroup>
                <InputGroup
                  id="password"
                  name="password"
                  value={password || ''}
                  type="password"
                  fill
                  onChange={this.handleChange}
                  placeholder="password"
                />
              </FormGroup>
              {signInFailed && (
                <Tag
                  minimal
                  fill
                  large
                  intent={Intent.DANGER}
                  icon={<FontAwesomeIcon icon="exclamation-circle" />}
                >
                  Invalid Username or Password
                </Tag>
              )}
            </form>
          </div>
          <div className={Classes.DIALOG_FOOTER}>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button
                onClick={this.onSignIn}
                disabled={loading}
                intent={Intent.PRIMARY}
              >
                {loading ? (
                  <FontAwesomeIcon icon="spinner" spin />
                ) : (
                  'Sign In'
                )}
              </Button>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default HotkeysTarget(SignInForm);
