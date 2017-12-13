import React, { Component } from 'react';
import axios from 'axios';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Header, LoginForm } from './components/common';
import Ready from './components/Ready';
import SeeMenu from './components/SeeMenu';
import AddItem from './components/AddItem';
import YourOrder from './components/YourOrder';
import CommentsAndQuestions from './components/CommentsAndQuestions';
import { signIn, signUp } from './actions/index';

class Index extends Component {
	state = {
		pageString: '',
		user: ''
	}

	componentWillMount() {
		console.log('userObject', this.state.user);
		axios.get('http://localhost:3000/api/v1/users/check')
			.then((response) => {
				console.log('user check', response);
			})
			.catch((response) => {
				console.log('error', response);
			});
	}

	setUser(userObject) {
		console.log('setUser userObject', userObject);
		this.setState({ user: userObject });
	}

	resetPage(string) {
		console.log('resetPage triggered');
		const user = this.state.user;
		axios.post('http://localhost:3000/api/v1/users/logout', user)
			.then((response) => {
				console.log('response resetPage', response);
			});
		this.setState({	
			pageString: string
		});
	}

	renderContent() {
		switch (this.state.pageString) {
			case 'logged in':
				return (
					<View>
						<Ready user={this.state.user} resetPage={this.resetPage.bind(this)} />
					</View>
				);
			case 'see menu':
				return (
					<View>
						<SeeMenu />
					</View>
				);
			case 'add item':
				return (
					<View>
						<AddItem />
					</View>
				);
			case 'your order':
				return (
					<View>
						<YourOrder />
					</View>
				);
			case 'comments and questions':
				return (
					<View>
						<CommentsAndQuestions />
					</View>
				);
			default: 
				return (
					<View>
						<LoginForm
							resetPage={this.resetPage.bind(this)}
							signUp={this.props.signUp}
							signIn={this.props.signIn}
							setUser={this.setUser.bind(this)}
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
