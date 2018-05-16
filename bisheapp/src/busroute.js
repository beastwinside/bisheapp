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
				name:'站点名次',
				price:'本站价格',
				index:'位置'


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
				<Text style={{color:'black',fontSize:12}}>
				位置：{rowData.stopindex}	★	★	★	{rowData.placename}★	★	★本站价格：{rowData.price}元
				</Text>
				</View>	
				<Text style={{color:'black',fontSize:12,textAlign:'center'}}>
				【】
				</Text>	
				<Text style={{color:'black',fontSize:12,textAlign:'center'}}>
				【】
				</Text>	
				<Text style={{color:'black',fontSize:12,textAlign:'center'}}>
				【】
				</Text>	
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
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text>公交路线777号  </Text>
			<Text>早班时间：5：30 晚班时间：6.：40</Text>
			 <Text>每班间隔：15分钟 </Text>


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