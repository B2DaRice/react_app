import { combineReducers } from 'redux';
import { posts, loadError, currLoading } from './reducers';

export default combineReducers({
  posts,
  loadError,
  currLoading
});
