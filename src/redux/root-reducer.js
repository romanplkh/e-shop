import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'

//HOLDS ALL STATE OF THE APP

//COMBINES ALL STATES TOGETHER
export default combineReducers({
  user: userReducer
})