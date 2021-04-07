/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component, useState} from 'react';
 import {View, Text, Button, TouchableHighlight, StyleSheet} from 'react-native';
 import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';


const ButtonDefault = ( data ) => {
    return (
        // <TouchableHighlight onPress={this._onPressButton} underlayColor="#fff">
        <TouchableHighlight underlayColor="#fff" style={styles.container}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>로그인</Text>
          </View>
        </TouchableHighlight>
     )
}
 
 const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 60,
      },
      button: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'stretch',
        backgroundColor: '#7534E2'
      },
      buttonText: {
        width: '100%',
        textAlign: 'center',
        padding: 20,
        color: 'white'
      }
 })
 export default ButtonDefault;
 