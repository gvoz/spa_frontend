export default function post(state = {}, action) {
  switch (action.type) {
    case 'ADD_POST':
      console.log("Hello redux!")
    default:
      return state;
  }
}
