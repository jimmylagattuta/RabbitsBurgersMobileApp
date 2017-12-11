// import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';

// create component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Image style={{ height: 55, width: 55, marginTop: -10 }} source={{ uri: 'https://i.imgur.com/DnIW1sS.jpg?3' }} />
			<View style={{ alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'space-between', marginLeft: 75 }}>
				<Text style={textStyle}>Rabbit's</Text>
				<Text style={textStyle}>Burgers</Text>
			</View>
		</View>
	);
};

const styles = {
	viewStyle: {
		alignItems: 'flex-start',
		flexDirection: 'row',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { height: 2 },
		shadowOpacity: 0.8,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		color: '#267014',
		fontSize: 20,
		marginTop: -5,
		marginLeft: 3
	}
};

// make the component available to the rest of the app
export { Header };
