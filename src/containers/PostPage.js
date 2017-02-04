import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import * as PostActions from '../actions/PostActions'
import NoMatch from '../components/NoMatch'
import Post from '../components/Post'

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.posts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRemovePost: (id) => dispatch(PostActions.removePost(id))
  }
}

class PostPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.postExist(nextProps.params.id, nextProps.posts)) {
      browserHistory.push('/')
    }
  }

  postExist(id, posts) {
    return posts.find((item) => { return item.id == id })
  }

  render() {
    const post = this.postExist(this.props.params.id, this.props.posts)
    return (
      <div>
        { post &&
          <div>
            <Post key={post.id} id={post.id} username={post.username} date={post.date} title={post.title} body={post.body} removePost={this.props.onRemovePost} />
            <Link to="/">Back to home page</Link>
          </div>
        }
        { !post &&
          <NoMatch />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)