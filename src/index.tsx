import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import { Provider } from 'react-redux';
import './i18n';
//@ts-ignore
import { MetamaskStateProvider } from 'use-metamask';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <MetamaskStateProvider>
      <App />
    </MetamaskStateProvider>
  </Provider>,
  document.getElementById('root'),
);
