import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { View, Text, Alert, Image, StyleSheet, SectionList, StatusBar } from 'react-native'
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements'
import { TagSelect } from 'react-native-tag-select';
import { callCMajorCategory, callCMinorCategory } from '../../../src/API/api'

const CategoryContainer = () => {
    const [category, setCategory] = useState([
            {
            medium_id: 1,
            medium_label:'',
            minor: [
                {
                    minor_id: 1,
                    minor_label: ''
                }
            ]
        }
    ])
    const data = [
        { id: 1, label: 'Money' },
        { id: 2, label: 'Credit card' },
        { id: 3, label: 'Debit card' },
        { id: 4, label: 'Online payment' },
        { id: 5, label: 'Bitcoin' },
    ];
    const getTag = category.map((v, i) => {
        return (
            <View key={i}>{console.log('v.minor :: ', v.minor)}
                <Text style={styles.labelText}>{v.medium_label}</Text>
                {/* {v.minor.map((item, i) => {
                    return ( */}
                        <TagSelect
                            keyAttr={data.id}
                            data={data}
                            // max={3}
                            // onMaxError={() => {
                            //     Alert.alert('Ops', 'Max reached');
                            // }}
                            ref={(tag) => {
                                this.tag = tag;
                            }}
                            itemStyle={styles.item}
                            itemLabelStyle={styles.label}
                            itemStyleSelected={styles.itemSelected}
                            itemLabelStyleSelected={styles.labelSelected}       
                        />
                        {/* {console.log('item',item)}
                        </TagSelect>
                    )
                })} */}
            </View>
        )
    })

    const changeDBFormet = (category) => {
        dbFormat = {
            medium_id: 1,
            medium_label:'',
            minor: [
                {
                    id: category.minor.minor_id,
                    label: category.minor.minor_label
                }
            ]
        }
        return dbFormat
    }
    useEffect(async() => {
        const categoryArr = await callCMinorCategory().then(response => {
            console.log('response.data', response.data)
            console.log('response.data.data', response.data.data)
            return response.data.data;
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
        //   rightComponent={{ icon: 'chevron-right', color: '#fff', }}
          rightComponent={{ icon: 'chevron-right', color: '#fff', }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={styles.container}
        >
            {/* <Text style={styles.labelText}>Payment:</Text>
            <TagSelect
            data={data}
            // max={3}
            ref={(tag) => {
                this.tag = tag;
            }}
            // onMaxError={() => {
            //     Alert.alert('Ops', 'Max reached');
            // }}
            /> */}
            {getTag}
            <View style={styles.buttonContainer}>
                <View>
                    <Button
                    title="Get selected"
                    onPress={() => {
                        Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
                    }}
                    />
                </View>
            </View>
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
 