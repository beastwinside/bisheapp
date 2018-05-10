import React,{Component} from 'react';
import {Text,View,Dimensions,Image,TextInput,Button,Alert} from 'react-native';
	import { Actions } from 'react-native-router-flux';

let scw=Dimensions.get('window').width;
let sch=Dimensions.get('window').height;


class login extends Component{
	constructor(props){
		super(props);
		this.state={
			account:'',
			password:''

		};

		this.longining = this.longining.bind(this);
		this.dnt = this.dnt.bind(this);


	}



	   longining(){
		if(this.state.account==''||this.state.password=='')
			Alert.alert('','请输入帐号密码');
		else 

		{
			let URL = 'http://10.2.10.32:8089/login';
			fetch(URL, {
				method: 'post',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(
					this.state
					)

			}).then(response => response.text())
			.then(
				data => {
					if(data=='无该注册帐号')
						Alert.alert('',data);
						else 
							{Alert.alert('',data);
							
								setTimeout(()=>{
								Actions.tabbar()},500)
							}

				}
				);

		}

	}

	   dnt(){


	}




	componentDidMount(){

	
	}



	render(){

		return(
			<View>
			<View style={{height:70,}}></View>
			<Text style={{fontSize:24,color:'black',textAlign:'center'}}>公交查询系统APP登录界面</Text>
			<View style={{height:21,}}></View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{color:'black',fontSize:18}}>帐号: </Text>
			</View>

			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<TextInput   onChange={e=>this.setState({account: e.nativeEvent.text })} />
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Text style={{color:'black',fontSize:18}}>密码: </Text>
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<TextInput   onChange={e=>this.setState({password: e.nativeEvent.text })} />
			</View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Button   onPress={this.longining}   title='登录'/>
			</View>
			<View style={{height:11,}}></View>
			<View style={{width:300,marginLeft:(scw-300)/2,}}>
			<Button   onPress={this.dnt}   title='返回注册'/>
			</View>
			</View>
		);
	}
}

export default login;