/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component, useState} from 'react';
 import {View, Text, Button, StyleSheet} from 'react-native';
 import { Header } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';


const InputLogin = ( data ) => {
    const {
        placeholder,
        autoCompleteType,
    } = data;
    const [state, setState] = useState({
        LoginInput: ''
    })
    const onChangeInput = (event) => {
        setState({
            LoginInput: event
         })
    }
    return (
        <View style={styles.containerView}>
            <TextInput
                value={state.LoginInput}
                style={styles.input}
                onChangeText={onChangeInput}
                multiline={true}
                maxLength={100}
                autoCapitalize={'none'}
                editable={true}
                placeholder={placeholder}
                autoCompleteType={autoCompleteType}
            />
        </View>
     )
}
 
 const styles = StyleSheet.create({
    containerView:{
        width: '100%',
    },
     input: {
         width: '100%',
         backgroundColor: '#eee',
         fontSize: 18,
         padding: 10,
         borderBottomWidth:1,
         backgroundColor: 'transparent',
         marginTop: 20
     }
 })
 export default InputLogin;
 