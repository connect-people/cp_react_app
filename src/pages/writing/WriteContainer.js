import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements'
import { callCMajorCategory, callCMinorCategory } from '../../../src/API/api'
import { MajorCategory } from '../../component/templates'
const WriteContainer = ({navigation}) => {
     return (
       <MajorCategory navigation={navigation}/>
    )
}
 
 
 export default WriteContainer;
 