
import React, { Component } from 'react';
import {  Platform, StyleSheet, Text, View,  TouchableOpacity} from 'react-native';
import { Router, Scene,Actions} from 'react-native-router-flux';


import Home from './home.js';
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
          tabBarStyle={{ backgroundColor: '#86C8FF' }}
          tabBarPosition="bottom" 
        >
  <Scene key="home" component={Home}  hideNavBar />
      <Scene key="login" component={Login}  hideNavBar  />
      <Scene key="register" component={Register}  hideNavBar    />
      </Scene>
      
  </Scene>
</Router>


  
    );
  }
}

