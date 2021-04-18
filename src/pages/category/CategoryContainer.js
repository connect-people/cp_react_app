import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, SectionList, StatusBar } from 'react-native'
import { Header, Card, ListItem, Button, Icon } from 'react-native-elements'

const CategoryContainer = () => {
    const DATA = [
          {
          title: {
            id: 1, label: 'Main dishes1'
          },
          data: [
            { id: 1, label: 'Money' },
            { id: 2, label: 'Credit card' },
            { id: 3, label: 'Debit card' },
            { id: 4, label: 'Online payment' },
            { id: 5, label: 'Bitcoin' },
          ]
        },
        {
          title: {
            id: 1, label: 'Main dishes1'
          },
          data: [
            { id: 1, label: 'Money' },
            { id: 2, label: 'Credit card' },
            { id: 3, label: 'Debit card' },
            { id: 4, label: 'Online payment' },
            { id: 5, label: 'Bitcoin' },
          ]
        },
    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title.label}</Text>
        </View>
    );
      
    return (
      <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '카테고리', style: { color: '#fff', fontSize:20, fontWeight:'600' }}}
          rightComponent={{ color: '#fff' }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={styles.container}
        >
            <SectionList
                sections={DATA}
                numColumns={2}                  // set number of columns 
                columnWrapperStyle={styles.row}  // space them out evenly
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title.label}</Text>
                )}
            />
        </View>
      </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        alignSelf: 'center',
        textAlign: 'left',
        alignItems: 'stretch',
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    item: {
        backgroundColor: '#ddd',
        width: '40%',
        padding: 10,
        marginVertical: 8,
        justifyContent: 'space-between',
        alignContent: 'space-between',
    },
    header: {
        fontSize: 16,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 14,
    }
  });
 
 export default CategoryContainer;
 