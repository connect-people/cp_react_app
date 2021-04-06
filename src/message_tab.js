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
 
 class TabMessageScreen extends Component {
   render() {
     return (
       <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center'
            }}
       >
           <Text>Message Screen</Text>
           <Button
            title="Go the Home Stack Screen"
            onPress={()=>{
              this.props.navigation.navigate('Home_Stack')
            }}
           />
       </View>
     )
   }
 }
 
 
 export default TabMessageScreen;
 