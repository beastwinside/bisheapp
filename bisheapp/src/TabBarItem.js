/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */

 import React, { Component } from 'react';

 import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';




class TabBarItem extends Component {


    render() {  

         
        return (
            <View style={styles.container}>
           
            <Text >
            {this.props.title}
            </Text>
            </View>
            );
    }
}

export default TabBarItem;


const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {

        fontSize: 15,
        
        marginBottom:10,



    }
});