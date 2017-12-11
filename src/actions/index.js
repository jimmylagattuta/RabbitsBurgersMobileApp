import axios from 'axios';
import firebase from 'firebase';
import { SIGN_UP, SIGN_IN } from './types';

export const signUp = (bundle) => {
	const email = bundle.emailSignup;
	const password = bundle.passwordSignup;
	return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => console.log('user', user))
          .catch((data) => console.log('catch data', data));
    };
};

export const signIn = (bundle) => {
	const email = bundle.emailSignin;
	const password = bundle.passwordSignin;
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => console.log(user));
	};
};
