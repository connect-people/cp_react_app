/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {View, Text, Button} from 'react-native';
 
 class SearchContainer extends Component {
   render() {
     return (
       <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center'
            }}
       >
           <Text>SearchContainer Screen</Text>
       </View>
     )
   }
 }
 
 
 export default SearchContainer;
 