import 'react-app-polyfill/ie9';
import 'babel-polyfill';
// import './temp';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
