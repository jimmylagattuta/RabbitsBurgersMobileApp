import { combineReducers } from 'redux';
import SignupReducer from './SignupReducer';

export default combineReducers({
	signUp: SignupReducer
});
