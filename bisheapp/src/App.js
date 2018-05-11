
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import { Router, Scene,Actions} from 'react-native-router-flux';


import Busroute from './busroute.js';
import Login from './login.js';
import Register from './register.js';
import TabBarItem from './TabBarItem.js';




export default class App extends Component<Props> {
  render() {
    return (

      <Router uriPrefix={'thesocialnetwork.com'}>
      <Scene key="root" >

      <Scene
      key="tabbar"
      tabs={true}
      tabBarStyle={{ backgroundColor: '#0F0F0F' }}
      tabBarPosition="bottom" 

      labelStyle={{fontSize:20,}}
      >
      <Scene  key="busroute" component={Busroute}  hideNavBar tabBarLabel="公交路线查询" />
      
      <Scene  key="register" component={Register}  hideNavBar   tabBarLabel="站点查询"  />
      </Scene>
      

       <Scene key="login" component={Login}  hideNavBar initial   />

      </Scene>

      </Router>



      );
  }
}

