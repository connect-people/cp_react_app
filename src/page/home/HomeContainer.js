import 'react-native-gesture-handler';
import React, {Component, useState, useEffect, useCallback} from 'react';
import axios from 'axios'
import {View, Text, Image, SafeAreaView, StatusBar, StyleSheet, FlatList, TouchableHighlight, Pressable} from 'react-native';
import { SearchBar } from 'react-native-elements';
import CardItem from '../../component/organisms/CardItem'
import {getData} from './api'

 const HomeContainer = (navigation) => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    
    // state = {
    //   search: '',
    // };

    // updateSearch = (search) => {
    //   this.setState({ search });
    // };
    //  const { search } = this.state;
    const onPress = () => {

    }
    const renderItem = useCallback(({ item, index, separators, navigation }) => (
        // <View
        //    style={styles.cardContainer}
        //     key={item.key}r
        //     // onPress={() => this._onPress(item)}
        //     // onShowUnderlay={separators.highlight}
        //     // onHideUnderlay={separators.unhighlight}
        //     >
            <CardItem 
                data={item}
                navigation={navigation}
                
            />
        //{/* </View> */}
    ))
    const ITEM_HEIGHT = 200;

    const getItemLayout = useCallback(
        (data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,    
        }), 
        []
    );    
    useEffect(async () => {
        const list = await getData(page).then(response=>{
            return response.data.data;
        })
        setList((prev) => [...prev, ...list]);
    }, [page]);
    return (
    <>
        <StatusBar/>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
          <View style={{ flex: 1, alignItems: 'center'}}>
            <SearchBar
                placeholder="파트너를 검색해보세요."
                // onChangeText={this.updateSearch}
                // value={search}
                // showLoading={false}
                platform={Platform.OS}
                clearIcon={true}
                focus={() => navigation.navigate('LoginPage')}
                // onChangeText={(text) => params.handleSearch(text)}
                // onClearText={() => console.log('onClearText')}
                cancelButtonTitle='Cancel'
                />
                <FlatList
                    numColumns={2}  
                    columnWrapperStyle={styles.row}
                    data={list}
                    renderItem={renderItem}
                    getItemLayout={getItemLayout}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    removeClippedSubviews={true}
                />
            </View>
        </SafeAreaView>
        </>
    )
}
 
const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        // flex : 1,
        // paddingLeft:'1%',
        // paddingRight:'1%',
        // marginTop: 10,
        backgroundColor: 'orange',
        // textAlign: 'left'
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
        textAlign: 'left',
    }
})
 export default HomeContainer;
 