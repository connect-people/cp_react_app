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
 
 class UserScreen extends Component {
    headerStyle = () => {
        this.props.navigation.setOptions({
            title: 'Custemizing',
            headerStyle : {
                backgroundColor: 'green'
            },
            headerTintColor: 'black',
            headerTitleStyle:{
                fontWeight: 'bold',
                color: 'purple'
            },
            headerBackTitle : 'BACK',
            headerRight: () =>{
                <Button 
                    title="To Home Screen"
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                    color="orange"
                />
            }
        })
    }
   render() {
       this.headerStyle();
       const {params} = this.props.route;
       const userIdx = params ? params.userIdx : null;
       const userName = params ? params.userName : null;
       const userLastName = params ? params.userLastName : null;

     return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
          <Text>UserScreen</Text>
          <Button 
             title="To Home Screen"
             onPress={()=>{
                 this.props.navigation.navigate('Home')
             }}
          />
          <Text>User Idx : {JSON.stringify(userIdx)}</Text>
          <Text>User Name : {JSON.stringify(userName)}</Text>
          <Text>User LastName : {JSON.stringify(userLastName)}</Text>
        </View>
     )
   }
 }
 
 
 export default UserScreen;
 