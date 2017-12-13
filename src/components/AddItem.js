import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class AddItem extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView>
					<Text>Add Item</Text>
				</ScrollView>
			</View>
		);
	}
}

export default AddItem;
