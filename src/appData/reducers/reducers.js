let definitions = require("../../definitions/definitions.json");

export function loadError(state = false, action) {
  switch (action.type) {
    case definitions.loadErrorType :
      return action.hasErrored;
    default :
      return state;
  }
}
export function currLoading(state = false, action) {
  switch (action.type) {
    case 'POSTS_LOADING' :
      return action.isLoading;
    default :
      return state;
  }
}
export function posts(state = [], action) {
  switch (action.type) {
    case 'POSTS_FETCH_DATA_SUCCESS' :
      return action.posts;
    default :
      return state;
  }
}