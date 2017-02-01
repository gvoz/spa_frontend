import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import * as PostActions from '../actions/PostActions'
import 'whatwg-fetch';

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

    fetch(process.env['BACKEND_SERVER'] + '/api/posts/')
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
    const { addPost } = this.props.PostActions

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            {this.state && this.state.posts.map(post => {
              return (
                <Post key={post.id} data = {post} />
              )}
            )}
          </div>
          <PostForm onPostSubmit={this.handlePostSubmit.bind(this)} onTestClick={addPost}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

function mapDispatchToProps(dispatch) {
  return {
    PostActions: bindActionCreators(PostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
