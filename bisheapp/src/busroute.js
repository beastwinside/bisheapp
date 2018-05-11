import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,ListView,TouchableOpacity,TextInput,Button ,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;



class Busroute extends Component{

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
				站点名为：{rowData.placename}
				</Text>
				</View>
				<View style={{width:300,marginLeft:(scw-300)/2,}}>
				<Text style={{fontSize:18,color:'black'}}>
				本站价格：{rowData.price}
				</Text>
				</View>
				<View style={{width:300,marginLeft:(scw-300)/2,}}>
				<Text style={{color:'black',fontSize:15}}>
				站点位置索引：{rowData.stopindex}
				</Text>
				</View>
				</View>
				<View style={{height:15}}></View>
				</TouchableOpacity>
				
				);
		}



	render(){

		return(
			<ScrollView>
		

			<View style={{width:300,marginLeft:(scw-300)/2,}}>	
				<View style={{height:40}}></View>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{color:'black',fontSize:18}}>输入公交路线号: </Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<TextInput   onChange={e=>this.setState({routeidquery: e.nativeEvent.text })} />
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Button   onPress={this.dnt}   title='查询'/>
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

export default Busroute;