/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {Component} from 'react';
 import {Image} from 'react-native';
 import Logo from './assets/images/ico/ico_home.png' 
 
 
 class LogoTitle extends Component {
   render() {
     return (
        <Image
        style={{width:40, height:40}}
        source={Logo}
       />
     )
   }
 }

 
 export default LogoTitle;
 