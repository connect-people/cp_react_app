import 'react-native-gesture-handler';
import React, {Component,useEffect,useState} from 'react';
import {View, Text, Button} from 'react-native';
import CardContent from '../../component/organisms/CardContent';
import {getDetail} from './api'

const HomeDescContainer = (props) => {
    const [data, setData] = useState({});
    const page_id = props.route.params.page_id;
    useEffect(async () => {
        const data = await getDetail(page_id).then(response=>{
            return response.data.data;
        })
        setData(data);
    }, []);
    return (
        <>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center'
                }}
            >
                <Text>{page_id}</Text>
            </View>
        </>
    )

}

export default HomeDescContainer;