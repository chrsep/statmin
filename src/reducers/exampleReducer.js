export default (state = {}, action) => {
  switch (action.type) {
    case "EXAMPLE":
      return action.filter
    default:
      return state
  }
}
