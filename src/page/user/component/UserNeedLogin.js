/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
//  import { Button } from 'react-native-elements';
//  import Icon from 'react-native-vector-icons/FontAwesome';
 import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
 const UserNeedLogin = ({ navigation }) => {
    
    return (
      <View style={styles.button}>
        <TouchableOpacity  navigation={navigation} onPress={() => navigation.navigate('LoginPage')}>
          <View style={styles.containerView}>
            <Text style={styles.title}>로그인이 필요합니다.</Text>
            <Icon name="caretright" size={18} style={styles.iconArrow} />
          </View>
        </TouchableOpacity>
        <View style={styles.containerVersion}>
          <Text style={styles.txtVersion}>버전정보</Text>
          <Text style={styles.numVersion}>V2.0.0</Text>
        </View>
      </View>
    )
 }
 
 const styles = StyleSheet.create({
  button: {
    flex: 1, width:'100%',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  title: {
    width: '85%',
    marginTop: 16,
    paddingVertical: 8,
    borderColor: '#20232a',
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'left',
    fontSize: 22,
    
  },
  containerView: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 30,
    paddingLeft:20,
    paddingBottom:20,
    // justifyContent: 'flex-end'
  },
  iconArrow: {
    width: 40,
    color:'#000', 
    paddingVertical: 8,
    marginTop: 21, padding: 10,
    paddingLeft: 20,
    alignItems: 'flex-end',
    textAlign: 'left',
  },
  containerVersion: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft:20,
    paddingBottom:20,
  },
  txtVersion: {
    width: '84%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop:50,
    color: '#606060',
    fontSize: 14,
  },
  numVersion: {
    width: '24%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop:50,
    color: '#606060',
    fontSize: 14,
  }
  });
 export default UserNeedLogin;
 