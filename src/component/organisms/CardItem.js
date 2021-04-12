import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { debug } from 'react-native-reanimated';
 
const CardItem = (item, onPress, navigation, props) => {
    return (
        <Card 
        key={item.data.id}
        containerStyle={styles.cardItemOuter} 
        wrapperStyle={styles.cardItemInner}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: item.data.imageUrl }}
            />
            <View style={styles.areaText}>
                <Text numberOfLines={1} style={styles.cardTitle}>{item.data.title}</Text>
                <Text numberOfLines={1} style={styles.cardDesc}>{item.data.title}</Text>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardItemOuter:{
        width: '100%',
        height: 280,
        margin: '2%',
        padding: 0,
        marginTop: '4%',
        alignSelf: "center",
        borderWidth: 0,
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
 