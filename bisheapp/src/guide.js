import React,{Component} from 'react';
import {Text,View,Dimensions,Image,ScrollView,ListView,TouchableOpacity,TextInput,Button ,Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;



class Guide extends Component{
	constructor(props) {
		super(props);
		const ds=new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1!=r2});
		this.state = {
			routeidquery:'',
			chufa:'A站',
			zhongdian:'B站',
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
		let URL = 'http://10.2.10.32:8089/guide';
		fetch(URL, {
			method: 'post',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(
				{data:this.state}
				)

		}).then(response => response.json())
		.then(
			data => {
				var obj=JSON.parse(data);

				var jsonArr=[];
				for(i=0;i<obj.length;i++)
				{
					jsonArr[i]=obj[i];
					alert(jsonArr[i].routeid)
			
				}


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
			<Text style={{color:'black',fontSize:18}}>出发站点: </Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<TextInput   onChange={e=>this.setState({chufa: e.nativeEvent.text })} defaultValue={this.state.chufa}/>
			</View>

			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{color:'black',fontSize:18}}>终点站点: </Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<TextInput   onChange={e=>this.setState({zhongdian: e.nativeEvent.text })}  defaultValue={this.state.zhongdian}/>
			</View>

			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Button   onPress={this.dnt}   title='查询'/>
			</View>
			<View style={{height:40}}></View>


			<View>
			<Text style={{textAlign:'center'}}>
			该次路线指引需经历一次换乘！无直达路线！
			</Text>

			</View>

			<View style={{height:20,borderBottomWidth:5,borderColor:'black'}}></View>
			<View>
			<Text style={{textAlign:'center'}}>
			从“学士路”到达“中庆广场站” “天一广场站”可换乘 661 ，662
			</Text>
			</View>
			<View style={{height:40}}></View>
			<View>
			<Text style={{textAlign:'center'}}>
			“中庆广场站” “天一广场站”到达“火车南站”可换乘 637 ，638 ，661-1
			</Text>
			</View>

			<View style={{height:20,borderBottomWidth:5,borderColor:'black'}}></View>


			<View>
			<Text style={{textAlign:'center'}}>
			从“学士路”到达“青少年宫”可换乘 669 ，670
			</Text>
			</View>
			<View style={{height:40}}></View>
			<View>
			<Text style={{textAlign:'center'}}>
			“青少年宫”到达“学士路站”可换乘 699 ，677 ，661-2
			</Text>
			</View>
			<View style={{height:20,borderBottomWidth:5,borderColor:'black'}}></View>

			</ScrollView>
			);
	}
}
export default Guide;