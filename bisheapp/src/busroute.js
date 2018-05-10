import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,ListView,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;



class Busroute extends Component{

	constructor(props) {
		super(props);
		const ds=new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1!=r2});
		this.state = {
			name:'123',
			dataSource:ds.cloneWithRows([{
				name:'鄞州区',
				price:'价格',
				index:'位置1'


			},
			{
				name:'海曙区',
				price:'价格',
				index:'位置1'	


			},
			{
				name:'北仑区',
				price:'价格',
				index:'位置1'


			},
			{
				name:'江东区',
				price:'价格',
				index:'位置1'


			},
			{
				name:'镇海区',
				price:'价格',
				index:'位置1'
			}])
		};
	}




	componentDidMount(){


	}


	renderRow1(rowData: string,sectionID: number, rowID: number){
			 
		
			return(
				<TouchableOpacity activeOpacity={0.9} 	>
				<View>
				<Text>
				{rowData.name}
				</Text>
				<Text>
				{rowData.price}
				</Text>
				<Text>
				{rowData.index}
				</Text>
				</View>
				</TouchableOpacity>

				);
		}



	render(){

		return(
			<ScrollView>
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow1}
				/>
			</ScrollView>
			);
	}
}

export default Busroute;