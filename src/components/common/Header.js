// import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';

// create component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	const user = props.user;

	if (user) {
		return (
			<View style={viewStyle}>
				<Image style={{ height: 58, width: 60, marginTop: -14, marginLeft: 6, backgroundColor: '#EBD972' }} source={{ uri: 'https://i.imgur.com/iuQ7dqC.png' }} />
				<View
					style={{
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'space-between',
						marginLeft: 60
					}}
				>
					<Text style={textStyle}>Rabbit's</Text>
					<Text style={textStyle}>Burgers</Text>
				</View>
				<View
					style={{
						alignItems: 'flex-end',
						flexDirection: 'column',
						justifyContent: 'space-between',
						height: 60,
						width: 350,
						backgroundColor: '#4D7F16'
					}}
				>
					<Text 
						style={{
							color: '#89C844',
							fontWeight: 'bold',
							fontSize: 14,
							marginTop: 30,
							marginLeft: 20,
							marginRight: 18,
							alignItems: 'flex-end',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}
					>
						Hi {user.first_name}!
					</Text>
				</View>
			</View>
		);
	}
	if (!user) {
		return (
			<View style={viewStyle}>
				<Image style={{ height: 58, width: 60, marginTop: -14, marginLeft: 6, backgroundColor: '#EBD972' }} source={{ uri: 'https://i.imgur.com/iuQ7dqC.png' }} />
				<View
					style={{
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'space-between',
						marginLeft: 60
					}}
				>
					<Text style={textStyle}>Rabbit's</Text>
					<Text style={textStyle}>Burgers</Text>
				</View>
			</View>
		);
	}
};

const styles = {
	viewStyle: {
		backgroundColor: '#EBD972',
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
		marginLeft: 3,
		fontWeight: 'bold'
	}
};

// make the component available to the rest of the app
export { Header };

			// <View style={{ backgroundColor: '#EBD972' }}>
			// 	<Image style={{ height: 58, width: 60, marginTop: -14, marginLeft: 6, backgroundColor: '#EBD972' }} source={{ uri: 'https://i.imgur.com/iuQ7dqC.png' }} />
			// 	<View
			// 		style={{
			// 			alignItems: 'flex-start',
			// 			flexDirection: 'column',
			// 			justifyContent: 'space-between',
			// 			marginLeft: 60
			// 		}}
			// 	>
			// 		<Text style={textStyle}>Rabbit's</Text>
			// 		<Text style={textStyle}>Burgers</Text>
			// 	</View>
			// 	<View
			// 		style={{
			// 			alignItems: 'flex-end',
			// 			flexDirection: 'column',
			// 			justifyContent: 'space-between'
			// 		}}
			// 	>
			// 		<Text 
			// 			style={{
			// 				color: '#89C844',
			// 				fontWeight: 'bold',
			// 				fontSize: 20,
			// 				marginTop: -5
			// 			}}
			// 		>
			// 			Hi {user.first_name}!
			// 		</Text>		
			// 	</View>
			// </View>
