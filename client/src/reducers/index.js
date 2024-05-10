import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import predication from './predication';
export default combineReducers({
  alert,
  auth,
  predication,
});
