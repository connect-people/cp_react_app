/**
 * Sample React Native HomeScreen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React, {Component} from 'react';
 import { Header } from 'react-native-elements';
 import {View, Text, Button, StyleSheet, ScrollView, SafeAreaView, StatusBar, Pressable} from 'react-native';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import { Input, CheckBox } from 'react-native-elements';
 import ButtonDefault from '../../component/molecules/ButtonDefault';
 import _Colors from '../../styles/_Colors';

 const JoinContainer = () => {
    return (
        <View style={styles.container}>
            {/* <Header
                leftComponent={{ icon: 'arrow-back', color: '#fff' , onPress:() => this.props.navigation.goBack(null) }}
                centerComponent={{ text: '회원 가입', style: { color: '#fff', fontSize:20, fontWeight:'600' } }}
                rightComponent={{ color: '#fff' }}
                backgroundColor='#7534E2'
                style={{
                    flex:2,
                    // alignItems:'center',
                    // justifyContent: 'center',
                }}
                /> */}
            <ScrollView>
                <View style={{
                        flex:1,
                        padding: 20,
                        paddingTop:30,
                        // alignItems:'center',
                        // justifyContent: 'center'
                    }}
                >
                    <Input
                        id="ID"
                        placeholder="이메일 주소 입력"
                        label="아이디(이메일)"
                        // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={styles.InpJoin}
                        // onChangeText={e => handleChange(e, id, e.target.value)}
                    />
                    <Input
                        placeholder="영문,숫자,특수문자 포함 6~15자"
                        label="비밀번호"
                        // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={styles.InpJoin}
                        secureTextEntry={true}
                        // onChangeText={value => this.setState({ comment: value })}
                    />
                    <Input
                        placeholder="비밀번호 재입력"
                        label="비밀번호 확인"
                        // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={styles.InpJoin}
                        secureTextEntry={true}
                        // onChangeText={value => this.setState({ comment: value })}
                    />
                    <View style={styles.contAuth}>
                        <Input
                            label="휴대폰번호"
                            // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                            style={styles.InpJoin && styles.IpnAuth}
                            // onChangeText={value => this.setState({ comment: value })}
                        />
                        <Pressable>
                            <Text style={styles.txtBtnAuth}>발송요청</Text>
                        </Pressable>
                    </View>
                    <View style={styles.contAuth}>
                        <Input
                            label="인증번호"
                            // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                            style={styles.InpJoin && styles.IpnAuth}
                            // onChangeText={value => this.setState({ comment: value })}
                        />
                        <Pressable>
                            <Text style={styles.txtBtnAuth}>인증</Text>
                        </Pressable>
                    </View>
                    <Input
                        placeholder="이름 입력"
                        label="이름"
                        // leftIcon={{ type: 'font-awesome', name: 'comment' }}
                        style={styles.InpJoin}
                        // onChangeText={value => this.setState({ comment: value })}
                    />
                    <View>
                        <CheckBox
                            title='이용약관 동의합니다.'
                            // checked={this.state.checked}
                        />
                        <CheckBox
                            title='개인정보취급방침 동의합니다.'r
                            // checked={this.state.checked}
                        />
                        <CheckBox
                            title='위치정보제공 동의합니다.'
                            // checked={this.state.checked}
                        />
                    </View>
                    <View style={styles.containerBtn}>
                        <ButtonDefault contant="가입하기"/>
                    </View>
            </View>
        </ScrollView>
       </View>
    )
 }
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
     InpJoin:{
        width: '100%',
        alignItems:'stretch'
     },
     contAuth: {
         width:'75%',
        flexDirection: 'row'
     },
     IpnAuth: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'right',
     },
     btnAuth: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'red'
     },
     txtBtnAuth: {
        flex: 0.2,
        width: 77,
        flexDirection: 'row',
        backgroundColor: _Colors.mainColor,
        color: _Colors.white,
        alignItems: 'stretch',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 10,
        padding: 10,
        paddingTop: 14
     },
     containerBtn: {
         marginTop: 30,
         marginBottom: 30,
     }

 })
 export default JoinContainer;
 