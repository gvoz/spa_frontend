import React from 'react';

class Post extends React.Component {
  render() {
    if (this.props.data.date != null) {
      var date = new Date(this.props.data.date)
      return (
        <div className="panel panel-default">
          <div className="panel-heading">{date.toLocaleDateString()}: {this.props.data.title}</div>
          <div className="panel-body">{this.props.data.body}</div>
          <div className="panel-footer">{this.props.data.username}</div>
        </div>
      )
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-heading">{this.props.data.title}</div>
          <div className="panel-body">{this.props.data.body}</div>
          <div className="panel-footer">{this.props.data.username}</div>
        </div>
      )
    }
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string,
  date: React.PropTypes.string,
};

export default Post;
