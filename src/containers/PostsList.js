import React from 'react'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import * as PostActions from '../actions/PostActions'

class PostsList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  handlePostSubmit() {
    this.props.fetchPosts()
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-6">
            {this.props.posts.map(post => {
              return (
               <Post key={post.id} id={post.id} username={post.username} date={post.date} title={post.title} body={post.body} removePost={this.props.removePost} />
              )}
            )}
          </div>
          <PostForm onPostSubmit={this.props.addPost} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList)
