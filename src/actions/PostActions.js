import * as types from '../constants/PostTypes'

export function getPosts(posts) {
  return {
    type: types.GET_POSTS,
    payload: posts
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch(process.env['BACKEND_SERVER'] + '/api/posts/')
      .then(response => response.json())
      .then(posts => dispatch(getPosts(posts)))
  }
}

export function addPost(post) {
  return dispatch => {
    fetch(process.env['BACKEND_SERVER'] + '/api/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => {
      if(response.ok) {
        dispatch(fetchPosts())
      }
    })
  }
}

export function removePost(id) {
  const url = process.env['BACKEND_SERVER'] + '/api/posts/' + id
  return dispatch => {
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => {
      if(response.ok) {
        dispatch(fetchPosts())
      }
    })
  }
}
