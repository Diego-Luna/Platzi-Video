// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CreateStpre } from 'redux';
// eslint-disable-next-line import/no-unresolved
import App from './routes/App';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,

  document.getElementById('app'));
