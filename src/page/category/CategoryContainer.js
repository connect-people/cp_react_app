/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import { View, Text, Image, StyleSheet } from 'react-native'
 import { Header, Card, ListItem, Button, Icon } from 'react-native-elements'

 const CategoryContainer = () => {
    const users = [
      {
         name: 'brynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynn',
         avatar: 'https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210403/0006db47cf0162f0ca17b5eb19a86f22.jpg'
      },
     ]
     return (
      <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '카테고리', style: { color: '#fff', fontSize:20, fontWeight:'600' }}}
          rightComponent={{ color: '#fff' }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent: 'center'
          }}
        >
          <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider/>
            {
              users.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.avatar }}
                    />
                    <Text style={styles.name}>{u.name}</Text>
                  </View>
                );
              })
            }
          </Card>
        </View>
      </>
     )
 }
 const styles = StyleSheet.create({
    user:{

    },
    image: {
        width: undefined,
        flex: 1,
        height: 100,
        borderRadius: 8,
        marginBottom: 7,
    },
    name: {

    },

 })
 
 export default CategoryContainer;
 