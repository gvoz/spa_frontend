import React from 'react';

class Post extends React.Component {
  render() {
    var date = new Date(this.props.date)
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{date.toLocaleDateString()}: {this.props.title}
        <button onClick={() => this.props.removePost(this.props.id)} className="btn btn-danger pull-right btn-sm">Remove</button>
        </div>
        <div className="panel-body">{this.props.body}</div>
        <div className="panel-footer">{this.props.username}</div>
      </div>
    )
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
