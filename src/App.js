import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Index from './Index';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyB7YcPgkEauJLep1WWsLYdekB21lMMMe_I',
			authDomain: 'rabbitsburgersmobileapp.firebaseapp.com',
			databaseURL: 'https://rabbitsburgersmobileapp.firebaseio.com',
			projectId: 'rabbitsburgersmobileapp',
			storageBucket: 'rabbitsburgersmobileapp.appspot.com',
			messagingSenderId: '403824403943'
		};

		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
				<ScrollView>
					<Index />
				</ScrollView>
				</View>
			</Provider>
		);
	}
}

export default App;

