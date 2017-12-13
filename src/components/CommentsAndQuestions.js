import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class CommentsAndQuestions extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView>
					<Text>Comments And Questions</Text>
				</ScrollView>
			</View>
		);
	}
}

export default CommentsAndQuestions;
