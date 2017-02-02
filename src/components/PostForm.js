import React from 'react';

class PostForm extends React.Component {

  handleSubmit(e){
    e.preventDefault();
    var username = this.refs.username.value;
    var date = this.refs.date.value;
    var title = this.refs.title.value;
    var body = this.refs.body.value;

    if (!username || !title || !body) {
      return;
    }

    var post = {
      username: username,
      date: date,
      title: title,
      body: body
    };

    this.props.onPostSubmit(post);
    this.refs.username.value = '';
    this.refs.date.value = '';
    this.refs.title.value = '';
    this.refs.body.value = '';
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Username"
              ref="username"
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Date"
              ref="date"
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Title"
              ref="title"
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Body"
              ref="body"
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add post"
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
