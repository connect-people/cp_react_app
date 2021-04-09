import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginContainer from './page/user/LoginContainer';

export const HomeStack = createStackNavigator(
{
    LoginPage: {
        screen: LoginContainer
    }
}
)