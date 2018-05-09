import React,{Component} from 'react';
import {Text,View,Dimensions,Image } from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;
class register extends Component{

	render(){

		return(
			<View>
			<Text>
				register
			</Text>
			</View>
		);
	}
}

export default register;