import React from 'react';
import Post from './Post';
import PostForm from './PostForm';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts.map((post, i) => <Post key = {i} data = {post} />)}
        <PostForm />
      </div>
    );
  }
}

export default App;
