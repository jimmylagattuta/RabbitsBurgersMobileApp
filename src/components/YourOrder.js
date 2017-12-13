import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class YourOrder extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView>
					<Text>Your Order</Text>
				</ScrollView>
			</View>
		);
	}
}

export default YourOrder;
