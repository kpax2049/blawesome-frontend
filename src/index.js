import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import * as ServiceWorker from './serviceWorker';
import './index.css';
import './themes/dark.scss';
import './themes/light.scss';

const history = createBrowserHistory();
module.hot.accept();
const MyApp = () => (
  <CookiesProvider>
    <Router history={history}>
      <App />
    </Router>
  </CookiesProvider>
);
ReactDOM.render(<MyApp />, document.getElementById('root'));

ServiceWorker.unregister();
