import React,{Component} from 'react';
import {Text,View,Dimensions,Image } from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;
class Home extends Component{

	render(){

		return(
			<View>
			<Text>
				home
			</Text>
			</View>
		);
	}
}

export default Home;