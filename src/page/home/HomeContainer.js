/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {View, Text, Button, SafeAreaView, StatusBar} from 'react-native';
 import { SearchBar } from 'react-native-elements';


 class HomeContainer extends Component {
    state = {
      search: '',
    };

    updateSearch = (search) => {
      this.setState({ search });
    };
   render() {
     const { search } = this.state;
     return (
     <>
        <StatusBar/>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ flex: 1 }}>
            <SearchBar
              placeholder="파트너를 검색해보세요."
              onChangeText={this.updateSearch}
              value={search}
            />
          </View>
            
          <View style={{
              flex:4,
              alignItems:'center',
              justifyContent: 'center'
            }}
          >
            
            
            <Text>HomeContainer Screen!!!</Text>
        </View>
       </SafeAreaView>
       </>
     )
   }
 }
 
 
 export default HomeContainer;
 