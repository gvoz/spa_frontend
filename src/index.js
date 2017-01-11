import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let posts = [
  { id: 1, name: 'New 1', description: 'New 1. Hello world! =)' },
  { id: 2, name: 'New 2', description: 'New 2. Hello world! =)' },
  { id: 3, name: 'New 3', description: 'New 3. Hello world! =)' }
]

ReactDOM.render(
  <App posts={posts} />,
  document.getElementById('root')
);
