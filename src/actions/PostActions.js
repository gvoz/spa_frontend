import * as types from '../constants/PostTypes'

export function getPosts(posts) {
  return {
    type: types.GET_POSTS,
    payload: posts
  }
}

export function addPost(post) {
  return {
    type: types.ADD_POST,
    payload: post
  }
}

export function removePost(id) {
  return {
    type: types.REMOVE_POST,
    payload: id
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch(process.env['BACKEND_SERVER'] + '/api/posts/')
      .then(response => response.json())
      .then(posts => dispatch(getPosts(posts)))
  }
}

export function fetchAddPost(post) {
  return dispatch => {
    fetch(process.env['BACKEND_SERVER'] + '/api/posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(response => response.json())
    .then(post => dispatch(addPost(post)))
  }
}

export function fetchRemovePost(id) {
  const url = process.env['BACKEND_SERVER'] + '/api/posts/' + id
  return dispatch => {
    fetch(url, {
      method: 'DELETE'
    })
    .then(dispatch(removePost(id)))
  }
}
