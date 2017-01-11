import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.data.name}: {this.props.data.description}</div>
      </div>
    );
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  description: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
};

export default Post;
