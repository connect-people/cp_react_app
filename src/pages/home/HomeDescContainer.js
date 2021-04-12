import 'react-native-gesture-handler';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import CardContent from '../../component/organisms/CardContent';
import {getDetail} from './api'
import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';



const HomeDescContainer = (props) => {
    const [data, setData] = useState({});
    const {page_id, item, title, content, imageUrl} =props.route.params
    const { navigation, route, modal, resizeMode, onPress } = props;
    // useEffect(async () => {
    //     const data = await getDetail(pageId).then(response=>{
    //         return response.data.itmes;
    //     })
    //     setData(data);
    // }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <Image
                        style={styles.image}
                        resizeMode='cover'
                        source={{ uri: imageUrl }}
                    />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

export default HomeDescContainer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        flex: 1,
      },
      header: {
        position: 'absolute',
        left: 16,
        top: 32
      },
      sheetHeader: {
        left: 16,
        top: 16
      },
      icon: {
        fontSize: 40,
        color: 'white'
      },
      image:{
          width: '100%',
          height: 400,
          padding: 0
      },
      title: {
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold'
      },
      content: {
        width: '100%',
        marginTop: 20,
        padding: 20,
        fontSize: 16,
        textAlign: 'left',
      },
})