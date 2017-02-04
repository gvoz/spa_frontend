import React from 'react'
import { Link } from 'react-router'

export default class NoMatch extends React.Component {
  render() {
    return (
      <div>
        Page not found. <Link to="/">Back to home page</Link>
      </div>
    );
  }
}
