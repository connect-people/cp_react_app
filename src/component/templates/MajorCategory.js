import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements'
import { callCMajorCategory, callCMinorCategory } from '../../../src/API/api'

const MajorCategory = ({navigation}) => {
    const [type, setType] = useState([])
    useEffect(async() => {
        const categoryArr = await callCMajorCategory().then(response => {
            // console.log('response.data', response.data)
            // console.log('response.data.data', response.data.data)
            return response.data.data;
        })
        setType([
            ...categoryArr,
        ])
    }, [])
    renderItem = ({ item }) => (
        <ListItem 
            bottomDivider 
            keyExtractor={item.major_id}
            onPress={() => navigation.navigate('MinorCategory', {
                majorID: item.major_id,
            })}
        >
            <ListItem.Content>
                <ListItem.Title>{item.major_label}</ListItem.Title>
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
            // keyExtractor={keyExtractor}
            data={type}
            renderItem={renderItem}
        />
       </>
    )
}
 
 
 export default MajorCategory;
 