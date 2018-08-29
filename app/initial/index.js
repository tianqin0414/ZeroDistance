import React, { Component, } from 'react';
import { StyleSheet, Text, View, } from 'react-native';


// 橘色 #F94301

const Dimensions = require('Dimensions');

const styles = StyleSheet.create({
	wrapper: {
		marginHorizontal: 10,
		marginVertical: Dimensions.get('window').height - 120 - 20,
		backgroundColor: '#ff2c44',
		height: 120,
		borderRadius: 7,
	  flexDirection: 'row',
	  // alignItems:'stretch',
		justifyContent: 'space-around',
	},

	right: {
	  marginLeft: 10,
		fontSize: 20,
	},
	left: {
		fontSize: 20,

		marginRight: 10,
	},
});
export default class Rule extends Component {
 static navigationOptions = {
 	header: null,
 };

 goLogin = () => {
 	const { navigation, } = this.props;
 	navigation.navigate('Login');
 };

 goRegister = () => {
 	const { navigation, } = this.props;
 	navigation.navigate('Register');
 };


 render() {
 	return (
 		<View style={styles.wrapper}>

 			<Text
 				style={styles.right}
 				onPress={() => {
 					this.goLogin();
 				}}
 			>
					登入
 			</Text>
 			<Text
 				style={styles.left}
 				onPress={() => {
 					this.goRegister();
 				}}
 			>
        注册
 			</Text>
 		</View>

 	);
 }
}
