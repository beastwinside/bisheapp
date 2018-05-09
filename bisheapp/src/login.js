import React,{Component} from 'react';
import {Text,View,Dimensions,Image } from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;
class login extends Component{

	render(){

		return(
			<View>
			<Text>
				login
			</Text>
			</View>
		);
	}
}

export default login;