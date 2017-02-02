import * as types from '../constants/PostTypes'

const initialPostState = {
  posts: []
}

export default function postsReducer(state = initialPostState, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state;
  }
}
