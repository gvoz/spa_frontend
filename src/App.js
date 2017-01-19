import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import 'whatwg-fetch';
require ('./env');

class App extends React.Component {

  loadPostsFromServer() {

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function parseJSON(response) {
      return response.json()
    }

    fetch(process.env['SITE'] + '/api/posts/')
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      this.setState({posts: response})
    })
  }

  componentDidMount() {
    this.loadPostsFromServer();
    this.timerID = setInterval(this.loadPostsFromServer.bind(this), this.props.pollInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handlePostSubmit() {
    this.loadPostsFromServer();
  }

  render() {
    return (
      <div  className="row">
        <div className="col-md-6">
          {this.state && this.state.posts.map(post => {
            return (
              <Post key={post.id} data = {post} />
            )}
          )}
        </div>
        <PostForm onPostSubmit={this.handlePostSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;
