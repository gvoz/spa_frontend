import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import * as PostActions from '../actions/PostActions'
import 'whatwg-fetch';

class App extends React.Component {

  componentDidMount() {
    this.props.PostActions.fetchPosts();
  }

  handlePostSubmit() {
    this.props.PostActions.fetchPosts();
  }

  render() {
    const { addPost } = this.props.PostActions

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            {this.props.posts.map(post => {
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
    posts: state.postsReducer.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    PostActions: bindActionCreators(PostActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
