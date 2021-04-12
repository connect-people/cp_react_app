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
 import { Header } from 'react-native-elements';
 
 class SearchContainer extends Component {
   render() {
     return (
      <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '검색', style: { color: '#fff', fontSize:20, fontWeight:'600' } }}
          rightComponent={{ color: '#fff' }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={{
                  flex:1,
                  alignItems:'center',
                  justifyContent: 'center'
              }}
        >
            <Text>SearchContainer Screen</Text>
      </View>
    </>
     )
   }
 }
 
 
 export default SearchContainer;
 