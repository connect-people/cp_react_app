import 'react-native-gesture-handler';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, StyleSheet, SafeAreaView, StatusBar, Linking} from 'react-native';
import Hyperlink from 'react-native-hyperlink'
import _Color from '../../styles/_Colors'

const HomeDescContainer = (props) => {
    const [data, setData] = useState({});
    const {title, brandName, subTitle, content, imageUrl} =props.route.params;
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
                    <Text style={styles.infoWriter}>{brandName} / {subTitle}</Text>
                    <Hyperlink 
                        linkStyle={ { color: '#2980b9'} }
                        onPress={ (url) => Linking.openURL(url) }>
                        <View style={styles.content}>
                            <Text style={styles.fontStyle}>{content}</Text>
                        </View>
                    </Hyperlink>
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
        marginTop: 30,
        marginBottom: 15,
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold'
      },
      infoWriter:{
        paddingHorizontal: 20,
        paddingVertical: 0,
        marginBottom: 15,
        fontSize: 12,

      },
      content: {
        marginTop: 10,
        padding: 20,
        textAlign: 'left',
        borderTopWidth: 1,
        borderTopColor: _Color.gray05
      },
      fontStyle: {
        fontSize: 16,
      }
})