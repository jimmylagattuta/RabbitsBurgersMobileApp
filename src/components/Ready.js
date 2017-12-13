import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Button } from './common';
// import axios from 'axios';

class Ready extends Component {
	componentWillMount() {
		console.log('Ready props ~> ', this.props);
	}

	seeMenuClick() {
		console.log('seeMenuClick');
	}

	addItemClick() {
		console.log('addItem');
	}

	yourOrderClick() {
		console.log('yourOrderClick');
	}

	commentsAndQuestionsClick() {
		console.log('commentsAndQuestions');
	}

	render() {
		const seeMenu = 'see menu';
		const addItem = 'add item';
		const yourOrder = 'your order';
		const commentsAndQuestions = 'comments and questions';

		return (
			<View style={{ flex: 1 }}>
				<ScrollView>
					<View>
						<Image
				            style={{
				              justifyContent: 'center',
				              alignItems: 'center',
				              width: 300,
				              height: 100,
				              marginTop: 45,
				              marginBottom: -40,
				              marginLeft: 15
				          	}}
				            name="top bun"
				            source={{ uri: 'https://i.imgur.com/GJKq9PF.png' }}
				        />
				    </View>

			        <View>
			          <Image
			            style={{
			              justifyContent: 'center',
			              alignItems: 'center',
			              width: 300,
			              height: 160,
			              marginTop: 10,
			              marginLeft: 22,
			              opacity: 0.8
			            }}
			            name="tomatoes"
			            source={{ uri: 'https://i.imgur.com/Dxevesb.png' }}
			          />
			        </View>

					<Text onPress={() => this.props.resetPage(seeMenu)}>See Menu</Text>
					<Text onPress={() => this.props.resetPage(addItem)}>Add Item</Text>
			        
			        <View>
			          <Image
			            style={{
			              justifyContent: 'center',
			              alignItems: 'center',
			              width: 300,
			              height: 190,
			              marginTop: -10,
			              marginBottom: -60,
			              marginLeft: 15
			            }}
			            name="lettuce"
			            source={{ uri: 'https://i.imgur.com/N6UDbP8.png' }}
			          />
			        </View>

			        <View>
			          <Image
			            style={{
			                justifyContent: 'center',
			                alignItems: 'center',
			                width: 260,
			                height: 100,
			                marginLeft: 37,
			                marginBottom: 50
			            }}
			            name="patty and cheese"
			            source={{ uri: 'https://i.imgur.com/b9sND4v.png?1' }}

			          />
			        </View>
					
					<Text onPress={() => this.props.resetPage(yourOrder)}>Your Order</Text>
					<Text onPress={() => this.props.resetPage(commentsAndQuestions)} >Comments & Questions</Text>

			        <View>
			          <Image
			            style={{
			              justifyContent: 'center',
			              alignItems: 'center',
			              width: 300,
			              height: 80,
			              marginTop: 30,
			              marginBottom: 20,
			              marginLeft: 22,
			              opacity: 0.8
			            }}
			            name="bottom bun"
			            source={{ uri: 'https://i.imgur.com/85QttKs.png?1' }}
			          />
			        </View>

				</ScrollView>
			</View>
		);
	}
}

export default Ready;
