import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
const WriteTag = (props) =>  {
    const { majorID } = props.route.params;
    return (
        <View style={{
                flex:1,
                alignItems:'center',
                justifyContent: 'center'
            }}
        >
            <Text>{majorID}</Text>
        </View>
    )
}


export default WriteTag;
 