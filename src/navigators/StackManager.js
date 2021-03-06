import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {
    HomeContainer, 
    WriteContainer,
    WriteTag, 
    SearchContainer, 
    CategoryContainer, 
    UserContainer,
    LoginContainer,
    UserNeedLogin,
    JoinContainer,
    HomeSearchContainer,
    HomeDescContainer
} from '../pages'
import { MajorCategory, MinorCategory } from '../component/templates'
import _Colors from '../styles/_Colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem('token')
  const loginPath = `/login?rPath=${encodeURICompoent(to.path)}`
  isAuth ? next() : next(loginPath)
}
MainScreen = () => {
  return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeBackgroundColor: _Colors.white,
                activeTintColor: _Colors.black,
                activeFontWeight: 'bold',
                inactiveTintColor: _Colors.black,
                style: {
                backgroundColor: _Colors.white
                }
            }}
            screenOptions={({route})=> ({
                tabBarLabel:route.name,
                tabBarIcon:({focused}) => (
                TabBarIcon(focused, route.name)
                )
            })}
        >
        <Tab.Screen name="HomePage" component={HomeContainer} options={{ tabBarLabel: '홈' }}/>
        <Tab.Screen name="WritingPage" component={WriteContainer} options={{ tabBarLabel: '글쓰기' }}/>
        <Tab.Screen name="SearchPage" component={SearchContainer} options={{ tabBarLabel: '검색' }}/>
        <Tab.Screen name="CategoryPage" component={CategoryContainer} options={{ tabBarLabel: '카테고리' }}/>
        <Tab.Screen name="UserPage" component={UserContainer} options={{ tabBarLabel: '내정보' }}/>
    </Tab.Navigator>
  )
}


const TabBarIcon = (focused, name) => {
    let iconImagePath;
    if(name ==='HomePage'){
        iconImagePath = require('../assets/images/ico/ico_tab_home.png')
    }else if(name ==='WritingPage'){
        iconImagePath = require('../assets/images/ico/ico_tab_writing.png')
    }else if(name ==='SearchPage'){
        iconImagePath = require('../assets/images/ico/ico_tab_search.png')
    }else if(name ==='CategoryPage'){
        iconImagePath = require('../assets/images/ico/ico_tab_category.png')
    }else if(name ==='UserPage'){
        iconImagePath = require('../assets/images/ico/ico_tab_user.png')
    }
    return (
        <Image 
        style={{
            width: focused ? 24 : 20,
            height: focused ? 24 : 20
        }}
        source={iconImagePath}
        />
    )
}


export default function StackManager() {
    return(
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions= {{
              headerStyle: {
                backgroundColor: _Colors.mainColor,
              },
              headerTintColor: _Colors.white,
              headerTitleStyle:{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: _Colors.white,
              },
            }}
            initialRouteName="Main">
            {/* TAB 홈, 글쓰기, 검색, 카테고리, 내정보 */}
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
            {/* 홈 검색페이지 */}
            <Stack.Screen name="HomeSearchPage" component={HomeSearchContainer}/>
            {/* 로그인이 요청 페이지 */}
            <Stack.Screen name="UserNeedLogin" component={UserNeedLogin}/>
            {/* 로그인페이지 */}
            <Stack.Screen name="LoginPage" component={LoginContainer}
              options={{
                title: '로그인',
              }}
            />
            {/* 회원가입페이지 */}
            <Stack.Screen name="JoinPage" component={JoinContainer}
              options={{
                title: '회원가입',
              }}
            />
            <Stack.Screen 
              name="DetailPage" 
              component={HomeDescContainer}
              options={{
                title: '',
              }}/>
              <Stack.Screen 
              name="WriteTag" 
              component={WriteTag}
              options={{
                title: '',
              }}/>
              <Stack.Screen 
              name="MajorCategory" 
              component={MajorCategory}
              options={{
                title: '',
              }}/>
              <Stack.Screen 
              name="MinorCategory" 
              component={MinorCategory}
              options={{
                title: '',
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
}