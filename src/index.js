import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './containers/App';
import configureStore from './store/configureStore'
import { browserHistory, Router } from 'react-router'
import routes from './routes'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
