/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeContainer, WriteContainer, SearchContainer, CategoryContainer, UserContainer} from './src/page'
import TabMessageScreen from './src/message_tab';
import TabHomeScreen from './src/home_tab';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

MainScreen = () => {
  return(
    <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeBackgroundColor: '#fff',
            activeTintColor: 'black',
            activeFontWeight: 'bold',
            inactiveTintColor: 'black',
            style: {
              // backgroundColor: '#7534E2'
              backgroundColor: '#fff'
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
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen}/>
          <Stack.Screen name="Home_Stack" component={TabHomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
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

const styles = StyleSheet.create({

});

export default App;
