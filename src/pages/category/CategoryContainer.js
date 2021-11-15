import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { View, Text, Alert, Image, StyleSheet, SectionList, StatusBar } from 'react-native'
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements'
import { TagSelect } from 'react-native-tag-select';
import { callCMinorCategory } from '../../../src/API/api'

const CategoryContainer = () => {
    const [category, setCategory] = useState([])
    const [state, setState] = useState({
        selectedTags: []
    })
    
    useEffect(() => {
        console.log('state', state)
    }, [state])
    const getTag = category.map((v, i) => {
        return (
            <View key={i}>
                <Text style={styles.labelText}>{v.label}</Text>
                <TagSelect
                    keyAttr={v.minor.id}
                    data={v.minor}
                    itemStyle={styles.item}
                    itemLabelStyle={styles.label}
                    itemStyleSelected={styles.itemSelected}
                    itemLabelStyleSelected={styles.labelSelected}
                    onItemPress={(selected) => setState({...state, selectedTags: selected })}  
                />
            </View>
        )
    })
    useEffect(async() => {
        const categoryArr = await callCMinorCategory().then(response => {
            console.log('response.data', response.data)
            console.log('response.data.data', response.data.data)
            return response.data.data.medium;
        })
        setCategory([
            ...categoryArr,
        ])
    }, [])
    const onPressTitle = () => {
        Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
    }
    return (
      <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '카테고리', style: { color: '#fff', fontSize:20, fontWeight:'600' }}}
          rightComponent={{ icon: 'chevron-right', color: '#fff', }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={styles.container}>
            {getTag}
        </View>
      </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      marginLeft: 15,
    },
    buttonContainer: {
      padding: 15,
    },
    buttonInner: {
      marginBottom: 15,
    },
    labelText: {
      color: '#333',
      fontSize: 15,
      fontWeight: '500',
      marginBottom: 15,
    },
    item: {
      borderWidth: 1,
      borderColor: '#333',    
      backgroundColor: 'transparent',
    },
    label: {
      color: '#333'
    },
    itemSelected: {
      backgroundColor: '#333',
    },
    labelSelected: {
      color: '#FFF',
    },
  });
 
 export default CategoryContainer;
 