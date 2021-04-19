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
 import { MajorCategory } from '../../component/templates'

 const SearchContainer = ({navigation}) => {
    return (
        <MajorCategory navigation={navigation}/>
    )
 }
 
 
 export default SearchContainer;
 