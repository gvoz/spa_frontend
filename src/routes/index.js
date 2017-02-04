import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from '../containers/App'
import PostsList from '../containers/PostsList'
import PostPage from '../containers/PostPage'
import NoMatch from '../components/NoMatch'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostsList} />
      <Route path="posts" component={PostsList} />
      <Route path="/posts/:id" component={PostPage} />
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
)
