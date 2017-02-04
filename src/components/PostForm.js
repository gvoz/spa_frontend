import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {submitAllowed: false}
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeInput () {
    let allowed = false
    if (this.refs.username.value.trim() && this.refs.title.value.trim() && this.refs.body.value.trim()) {
      allowed = true
    }
    this.setState({submitAllowed: allowed})
  }

  handleSubmit(e){
    e.preventDefault();
    var username = this.refs.username.value.trim();
    var date = this.refs.date.value.trim();
    var title = this.refs.title.value.trim();
    var body = this.refs.body.value.trim();

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
    this.setState({submitAllowed: false})
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
              onChange={this.handleChangeInput}
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
              onChange={this.handleChangeInput}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Body"
              ref="body"
              onChange={this.handleChangeInput}
            />
          </div>
          <input
            type="submit"
            className={ "btn btn-primary" + (this.state.submitAllowed ? '' : ' disabled') }
            value="Add post"
          />
        </form>
      </div>
    );
  }
}

export default PostForm;
