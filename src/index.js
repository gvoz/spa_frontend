import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App pollInterval={10000} />,
  document.getElementById('root')
);
