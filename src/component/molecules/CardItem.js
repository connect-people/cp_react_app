import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Pressable, ImageBackground, StyleSheet, Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
 
const CardItem = (item) => {
    // const users = [
    //     {
    //         name: 'brynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynnbrynn',
    //         avatar: 'https://d1cyiajrf0e1fn.cloudfront.net/images/storage/board/20210410/2294319c110e5ba5d9ebfa25e84d4c26.jpg'
    //     }
    // ]
    return (
        <Card containerStyle={styles.cardItemOuter} wrapperStyle={styles.cardItemInner}>
            <View style={styles.user}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.data.imageUrl }}
                />
                <View style={styles.areaText}>
                    <Text numberOfLines={1} style={styles.cardTitle}>{item.data.title}</Text>
                    <Text numberOfLines={1} style={styles.cardDesc}>{item.data.title}</Text>
                </View>
            </View>
        </Card>
    )
}
const styles = StyleSheet.create({
    cardItemOuter:{
        width: '48%',
        margin: '2%',
        padding: 0,
        marginTop: '4%',
        alignSelf: "flex-start",
    },
    cardItemInner:{
        padding: 0
    },
    image:{
        width: '100%',
        height: 150,
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
    }
})
 
export default CardItem;
 