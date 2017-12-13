import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SignupReducer from './SignupReducer';

export default combineReducers({
	form: formReducer,
	signUp: SignupReducer
});
