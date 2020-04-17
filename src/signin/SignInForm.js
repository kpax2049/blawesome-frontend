import React, { useState } from 'react';
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
// import { HotkeysTarget } from '@blueprintjs/core/lib/esnext/components/hotkeys/hotkeysTarget.js';
import ThemeStore from '../mobx/ThemeStore';
import axios from 'axios';
import { getHookSetterName } from '../util/utils';

function SignInForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [signInFailed, setSignInFailed] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSignIn = () => {
    if (!username.length) {
      return;
    }
    if (!password.length) {
      return;
    }
    setSignInFailed(false);
    setLoading(true);

    axios('api/auth', {
      method: 'post',
      data: { username, password },
    })
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          window.location.reload();
        } else {
          setSignInFailed(true);
        }
      })
      .catch(() => {
        setSignInFailed(true);
        setLoading(false);
      });
  };
  const renderHotkeys = () => {
    return (
      <Hotkeys>
        <Hotkey allowInInput combo="enter" onKeyDown={onSignIn} />
      </Hotkeys>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        onClose={props.onClose}
        style={{ width: 250 }}
      >
        <div className={Classes.DIALOG_BODY}>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup
                id="username"
                name="username"
                value={username || ''}
                fill
                autoFocus={true}
                autoComplete="off"
                onChange={handleUsernameChange}
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
                onChange={handlePasswordChange}
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
              onClick={onSignIn}
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
export default SignInForm;
