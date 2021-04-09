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


 const HomeContainer = () => {
    // state = {
    //   search: '',
    // };

    // updateSearch = (search) => {
    //   this.setState({ search });
    // };
    //  const { search } = this.state;
    
     return (
     <>
        <StatusBar/>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ flex: 1 }}>
            <SearchBar
              placeholder="파트너를 검색해보세요."
              // onChangeText={this.updateSearch}
              // value={search}
              // showLoading={false}
              platform={Platform.OS}
              clearIcon={true}
              focus={() => navigation.navigate('LoginPage')}
              // onChangeText={(text) => params.handleSearch(text)}
              // onClearText={() => console.log('onClearText')}
              cancelButtonTitle='Cancel'
            />
          </View>
       </SafeAreaView>
       </>
     )
 }
 
 
 export default HomeContainer;
 