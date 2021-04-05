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
 
 class HomeScreen extends Component {
   render() {
     return (
       <View style={{
           flex:1,
           alignItems:'center',
           justifyContent:'center'
       }}>
         <Text>HomeScreen</Text>
         <Button 
            title="To User Screen"
            onPress={()=>{
                this.props.navigation.navigate('User',{
                    userIdx: 100, 
                    userName:'Gildong',
                    userLastName:'Hong'
                })
            }}
         ></Button>
         <Button
            title="Change the title"
            onPress={()=>
                this.props.navigation.setOptions({
                    title: 'Changed!!!!',
                    headerStyle :{
                        backgroundColor: 'pink',

                    },
                    // options: ({
                    //     title: 'User screen',
                    //     headerTintColor: 'red',
                    //     headerTitleStyle:{
                    //         fontWeight: 'bold',
                    //         color: 'purple'
                    //     }
                    // })
                }
            )}
        />
       </View>
     )
   }
 }
 
 
 export default HomeScreen;
 