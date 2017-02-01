import * as types from '../constants/PostTypes'

export default function postsReducer(state = { posts: [] }, action) {
  switch (action.type) {
    case types.GET_POSTS:
      return { ...state, posts: action.payload }
    default:
      return state;
  }
}
