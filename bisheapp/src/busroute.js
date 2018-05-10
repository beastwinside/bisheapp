import React,{Component} from 'react';
import {Text,View,Dimensions,Image } from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;



class Busroute extends Component{

		constructor(props) {
			super(props);
		
			this.state = {
				name:'123'
			};
		}




	componentDidMount(){


	}






	render(){

		return(
			<View>
			<Text>
				Busroute
			</Text>
			</View>
		);
	}
}

export default Busroute;