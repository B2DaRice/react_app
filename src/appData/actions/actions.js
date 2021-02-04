export function loadError(bool) {
  return {
      type       : 'POSTS_ERROR',
      hasErrored : bool
  };
}
export function currLoading(bool) {
  return {
    type      : 'POSTS_LOADING',
    isLoading : bool
  };
}
export function fetchSuccess(posts) {
  return {
    type : 'POSTS_FETCH_DATA_SUCCESS',
    posts
  };
}

export function postsFetchData(url) {
  return (dispatch) => {
    dispatch(currLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(currLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((posts) => dispatch(fetchSuccess(posts)))
      .catch(() => dispatch(loadError(true)));
  };
}
