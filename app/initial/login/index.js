import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1155ff',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

export default class Login extends Component {
 static navigationOptions = {
 	header: null,
 };

 goTab = () => {
 	const { navigation, } = this.props; // TQ0825
 	navigation.navigate('Main');
 };


 render() {
 	return (
 		<View style={styles.container}>
 			<Text
 				style={styles.welcome}
 				onPress={() => {
	         this.goTab();
 				}}
 			>
         登入!
 			</Text>
 		</View>
 	);
 }
}
