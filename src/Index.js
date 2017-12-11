import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LoginForm, Header } from './components/common';
import { signIn, signUp } from './actions/index';

class Index extends Component {
	state = {
		pageString: '',
		user: ''
	}

	componentWillMount() {
		axios.get('http://localhost:3000/api/v1/sessions/check')
			.then((response) => {
				// console.log('user check', response);
			})
			.catch((response) => {
				// console.log('error', response);
			});
	}

	resetPage(string) {
		console.log('resetPage triggered');
		this.setState({	
			pageString: string
		});
	}

	renderContent() {
		switch (this.state.pageString) {
			case 'logged in':
				return (
					<View>
						<Text>logged in</Text>
					</View>
				);

			default: 
				return (
					<View>
						<LoginForm
							resetPage={this.resetPage.bind(this)}
							signUp={this.props.signUp}
							signIn={this.props.signIn}
						/>
					</View>
				);
		}
	}

	render() {
		return (
			<View style={{ margin: 20 }}>
			<Header headerText="Rabbit's Burgers" user={this.state.user} />
				{this.renderContent()}
			</View>
		);
	}
}

const mapStateToProps = state => {
	const { signUp, signIn } = state;
	return { signUp, signIn };
};

export default connect(mapStateToProps, { signUp, signIn })(Index);
