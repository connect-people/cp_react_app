/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {View, Text, Button, FlatList} from 'react-native';
 import { ListItem, Avatar, Header } from 'react-native-elements'

 
const WriteContainer = () => {
    const list = [
        {
          name: '구매자'
        },
        {
          name: '판매자'
        },
        {
          name: '광고/판촉/제품소개서'
        },
        {
          name: '기타(운송/수송)등'
        }
      ]
      
    keyExtractor = (item, index) => index.toString()
      
    renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
     return (
       <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '글쓰기', style: { color: '#fff', fontSize:20, fontWeight:'600' } }}
          rightComponent={{ color: '#fff' }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
       <FlatList
            keyExtractor={this.keyExtractor}
            data={list}
            renderItem={this.renderItem}
        />
       </>
    )
}
 
 
 export default WriteContainer;
 