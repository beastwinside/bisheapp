import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,ListView,TouchableOpacity,TextInput,Button ,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;



class Busstate extends Component{
	constructor(props) {
		super(props);
		const ds=new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1!=r2});
		this.state = {
			routeidquery:'',
			name:'123',
			dataSource:ds.cloneWithRows([{
				name:'鄞州区',
				price:'价格',
				index:'位置1'


			},
			{
				name:'海曙区---------->（车辆停靠）',
				price:'价格',
				index:'位置1'	


			},
			{
				name:'北仑区',
				price:'价格',
				index:'位置1'


			},
			{
				name:'江东区--------->(车辆停靠)',
				price:'价格',
				index:'位置1'


			},
			{
				name:'镇海区',
				price:'价格',
				index:'位置1'
			}])
		};

		this.dnt=this.dnt.bind(this);
	}



	dnt(){
		let URL = 'http://10.2.10.32:8089/routeidquery';
		fetch(URL, {
			method: 'post',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(
				{routeid:this.state.routeidquery}
				)

		}).then(response => response.json())
		.then(
			data => {
				const ds=new ListView.DataSource({
					rowHasChanged:(r1,r2)=>r1!=r2});
				this.setState({
					dataSource:ds.cloneWithRows(data)
				});


			}
			);


	}





	componentDidMount(){


	}


	renderRow1(rowData: string,sectionID: number, rowID: number){

		
		return(
			<TouchableOpacity activeOpacity={0.9} 	>
			<View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text sttyle={{fontSize:20,color:'black'}}>
			{rowData.name}
			</Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{fontSize:18,color:'black'}}>
			本站价格：{rowData.price}
			</Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{color:'black',fontSize:15}}>
			位置：{rowData.stopindex}
			</Text>
			</View>
			</View>
			<View style={{height:15}}></View>

			<View style={{height:20,borderBottomWidth:5,borderColor:'black'}}></View>
			</TouchableOpacity>

			);
	}



	render(){

		return(
			<ScrollView>


				<View style={{height:80}}></View>

			<View style={{width:300,marginLeft:(scw-300)/2,}}>	

			<View >
			<Text style={{color:'black',fontSize:18}}>到站情况查询--输入要查询到站情况的公交车线路: </Text>
			</View>
			<View >
			<TextInput   onChange={e=>this.setState({routeidquery: e.nativeEvent.text })}  value='661-1'/>
			</View>


			<View style={{height:40}}></View>
			</View>



			<View style={{height:40}}></View>
			<ListView
			dataSource={this.state.dataSource}
			renderRow={this.renderRow1}
			/>
			</ScrollView>
			);
	}
}
export default Busstate;