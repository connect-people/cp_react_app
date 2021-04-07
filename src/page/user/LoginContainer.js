/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import {View, Text, Pressable, StyleSheet, Button} from 'react-native';
 import { Header } from 'react-native-elements';
 import InputLogin from '../../component/molecules/InputLogin'
 import ButtonDefault from '../../component/molecules/ButtonDefault'

 
 class LoginContainer extends Component {
   render() {
     return (
       <>
        <Header
          leftComponent={{ color: '#fff' }}
          centerComponent={{ text: '로그인', style: { color: '#fff', fontSize:20, fontWeight:'600' } }}
          rightComponent={{ color: '#fff' }}
          backgroundColor='#7534E2'
          style={{
            flex:2,
            alignItems:'center',
            justifyContent: 'center',
          }}
        />
        <View style={styles.containerHeader}>
            <Text style={styles.txtTitle}>환영합니다!</Text>
            <Text style={styles.txtDesc}>가입하신 이메일과 패스워드를 입력해 주세요.</Text>
        </View>
        <View style={styles.containerMain}>
            <InputLogin placeholder="아이디(이메일)" autoCompleteType="email"/>
            <InputLogin placeholder="비밀번호" autoCompleteType="password"/>
            <View style={styles.containerFindWrap}>
                <View style={styles.containerFind}>
                    {/* <Button title="아이디 찾기" style={styles.txtFind}></Button>
                    <Button title="비밀번호 찾기" style={styles.txtFind}></Button> */}
                    <Pressable>
                        <Text style={styles.txtFind}>아이디찾기</Text>
                    </Pressable>
                    <Text style={styles.txtFind && styles.bar}>|</Text>
                    <Pressable>
                        <Text style={styles.txtFind}>비밀번호찾기</Text>
                    </Pressable>
                </View>
                <ButtonDefault/>
                <View style={styles.containerJoin}>
                    <Text style={styles.txtWelcom}>처음이신가요?</Text>
                    <Pressable>
                        <Text style={styles.btnJoin}>회원가입</Text>
                    </Pressable>
                </View>
            </View>
        </View>
       </>
     )
   }
 }
 
const styles = StyleSheet.create({
    containerHeader : {
        flex:2,
        alignItems:'center',
        justifyContent: 'center',
    },
    txtTitle: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    txtDesc: {
        fontSize: 18,
        marginTop: 30,
    },
    containerMain: {
        flex:4,
        margin:30
    },
    containerFindWrap:{
        flexWrap: "wrap",
        width: '100%',
        top: 0,
        right: 0,
    },
    containerFind:{
        position: 'absolute',
        alignItems :'flex-end',
        flexDirection:'row',
        top: 0,
        right: 0,
        marginTop: 10,
    },
    txtFind: {
        flexDirection:'row',
        fontSize: 14,
        alignItems :'flex-end'
    },
    buttonStyle: {
        color: 'red',
        marginTop: 50,
        padding: 20,
        backgroundColor: 'green'
    },
    bar:{
        marginLeft:4,
        marginRight:4,
    },
    containerJoin:{
        flexDirection:'row',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtWelcom:{
        lineHeight: 14,
        fontSize: 14,
    },
    btnJoin:{
        lineHeight: 13,
        fontSize: 14,
        color: '#7534E2',
    }
})
 
export default LoginContainer;
 