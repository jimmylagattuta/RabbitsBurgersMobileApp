import { SIGN_UP } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_UP:
			return [...state, action.payload];
		default:
			return state;
	}
};
