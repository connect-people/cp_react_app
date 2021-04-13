import 'react-native-gesture-handler';
import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, SafeAreaView, StatusBar, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Card} from 'react-native-elements'
import {getData} from './api'

 const HomeContainer = ({navigation}) => {
    const [page, setPage] = useState(1);
    const [list, setList] = useState([]);
    
    // state = {
    //   search: '',
    // };

    // updateSearch = (search) => {
    //   this.setState({ search });
    // };
    //  const { search } = this.state;
    const renderItem = useCallback(({ item, index, separators }) => (
        <TouchableOpacity 
            style={styles.listContaienr} 
            onPress={() => navigation.navigate('DetailPage', {
                page_id: item.ID,
                title: item.title,
                content: item.content,
                imageUrl: item.imageUrl,

            })}
            navigation={navigation}
            >
            <Card 
                key={item.ID}
                containerStyle={styles.cardItemOuter} 
                wrapperStyle={styles.cardItemInner}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: item.imageUrl }}
                />
                <View style={styles.areaText}>
                    <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.cardDesc}>{item.content}</Text>
                </View>
            </Card>
            
        </TouchableOpacity>    
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
                    keyExtractor={(item) => item.ID}
                    renderItem={renderItem}
                    getItemLayout={getItemLayout}
                    onEndReachedThreshold={0.8}
                    initialNumToRender={20}
                    removeClippedSubviews={true}
                />
            </View>
        </SafeAreaView>
        </>
    )
}
 
const styles = StyleSheet.create({
    listContaienr: {
        width: '48%',
        height: 280,
        padding: 0,
        margin: '1%',
        alignSelf: "flex-start",
    },
    cardContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: 'orange',
        justifyContent: 'space-around',
    },
    row: {
        flex: 1,
        justifyContent: 'space-around',
        alignSelf: 'center',
        textAlign: 'left',
    },



    //card
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
 export default HomeContainer;
 