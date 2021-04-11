import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
 
const CardItem = (item, pressEvent) => {
    _onLongPressButton = () => {
        alert('You long-pressed the button!')
    }
    return (
        <Card containerStyle={styles.cardItemOuter} wrapperStyle={styles.cardItemInner}>
            <Pressable>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.data.imageUrl }}
                />
                <View style={styles.areaText}>
                    <Text numberOfLines={1} style={styles.cardTitle}>{item.data.title}</Text>
                    <Text numberOfLines={1} style={styles.cardDesc}>{item.data.title}</Text>
                </View>
            </Pressable>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardItemOuter:{
        width: '46%',
        height: 280,
        margin: '2%',
        padding: 0,
        marginTop: '4%',
        alignSelf: "flex-start",
    },
    cardItemInner:{
        padding: 0,
    },
    image:{
        width: '100%',
        height: 220,
        padding: 0
    },
    areaText: {
        padding: '4%'
    },
    cardTitle:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardDesc: {
        fontSize: 14,
        marginTop: 5,
    }
})
 
export default CardItem;
 