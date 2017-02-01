import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {username: '', date: '', title: '', body: ''}
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleTestClick(e) {
    this.props.onTestClick(this.state);
  }

  sendPost(post){
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

    fetch(process.env['BACKEND_SERVER'] + '/api/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(response => {
      this.props.onPostSubmit(post);
      this.setState({username: '', date: '', title: '', body: ''})
    })
    .catch(error => {
      console.log('Request failed', error);
    })
  }

  handleSubmit(e){
    e.preventDefault();
    var username = this.state.username;
    var date = this.state.date;
    var title = this.state.title;
    var body = this.state.body;

    if (!username || !title || !body) {
      return;
    }

     var post = {
      username: username,
      date: date,
      title: title,
      body: body
    }

    this.sendPost(post)
  }

  render() {
    return (
      <div className="col-md-6">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleDateChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleTitleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              type="text"
              placeholder="Body"
              value={this.state.body}
              onChange={this.handleBodyChange.bind(this)}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Add post"
          />
        </form>
        <button className="btn btn-default" onClick={this.handleTestClick.bind(this)}>Test</button>
      </div>
    );
  }
}

export default PostForm;
