import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import {
  HomeContainer, 
  WriteContainer, 
  SearchContainer, 
  CategoryContainer, 
  UserContainer,
  LoginContainer,
  UserNeedLogin,
  JoinContainer,
  HomeSearchContainer
} from './src/page'
import _Colors from './src/styles/_Colors';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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
      <Tab.Screen name="홈" component={HomeContainer}/>
      <Tab.Screen name="글쓰기" component={WriteContainer}/>
      <Tab.Screen name="검색" component={SearchContainer}/>
      <Tab.Screen name="카테고리" component={CategoryContainer}/>
      <Tab.Screen name="내정보" component={UserContainer}/>
    </Tab.Navigator>
  )
}


const TabBarIcon = (focused, name) => {
  let iconImagePath;
  if(name ==='홈'){
    iconImagePath = require('./src/assets/images/ico/ico_tab_home.png')
  }else if(name ==='글쓰기'){
    iconImagePath = require('./src/assets/images/ico/ico_tab_writing.png')
  }else if(name ==='검색'){
    iconImagePath = require('./src/assets/images/ico/ico_tab_search.png')
  }else if(name ==='카테고리'){
    iconImagePath = require('./src/assets/images/ico/ico_tab_category.png')
  }else if(name ==='내정보'){
    iconImagePath = require('./src/assets/images/ico/ico_tab_user.png')
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

class App extends Component {
  // logoTitle = () => {
  //   return (
  //     <Image
  //       style={{width:40, height:40}}
  //       source={require('./src/assets/images/ico/ico_home.png')}
  //      />
  //   )
  // }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions= {{
              // title: 'User screen',
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
            {/* <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/> */}
            {/* 홈 검색페이지 */}
            {/* <Stack.Screen name="HomeSearchPage" component={HomeSearchContainer}/> */}
            {/* 로그인이 요청 페이지 */}
            {/* <Stack.Screen name="UserNeedLogin" component={UserNeedLogin}/> */}
            {/* 로그인페이지 */}
            {/* <Stack.Screen name="LoginPage" component={LoginContainer}/> */}
            {/* 회원가입페이지 */}
            {/* <Stack.Screen name="JoinPage" component={JoinContainer}/> */}
            <Stack.Screen name="JoinPage" component={CategoryContainer} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>  
      // <NavigationContainer>
      //   <Stack.Navigator 
      //     initialRouteName="Home"
      //     screenOptions= {{
      //         // title: 'User screen',
      //         headerStyle: {
      //           backgroundColor: '#336688'
      //         },
      //         headerTintColor: 'blue',
      //         headerTitleStyle:{
      //             fontWeight: 'bold',
      //             color: '#fff'
      //         },
      //       }}
      //     >
      //     <Stack.Screen 
      //       name="Home" 
      //       component={HomeScreen}
      //       options={{
      //         title:'Home Screen',
      //         headerTitle: <LogoTitle/>,
      //         headerRight: () => {
      //           <button
      //             title="Info"
      //             onPress ={()=> alert('button!!!')}
      //             color = "orange"
      //           />
      //         }
      //       }}
      //     />
      //     <Stack.Screen 
      //     name="User" 
      //     component={UserScreen}
      //     initialParams={{
      //       userIdx: 50, 
      //       userName:'Gildong',
      //       userLastName:'Go'
      //     }}
      //     // options= {{
      //     //   title: 'User screen',
      //     //   headerTintColor: 'red',
      //     //   headerTitleStyle:{
      //     //       fontWeight: 'bold',
      //     //       color: 'purple'
      //     //   }
      //     // }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    )
  }
}


export default App;
