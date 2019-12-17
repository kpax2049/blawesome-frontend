import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const MyApp = () => <App />;
ReactDOM.render(<MyApp />, document.getElementById('app'));

module.hot.accept();
