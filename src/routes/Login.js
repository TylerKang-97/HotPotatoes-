import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export const Login = ({ navigator, page }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={{ margin: '10%', padding: '2%', flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>
            <View
                style={{
                    flexDirection: 'column',
                    flex: 1,
                }}
            >
                <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '800' }}>로그인 화면</Text>
            </View>
            <View style={{ flex: 3 }}>
                <View
                    style={{
                        padding: '5%',
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: '2%',
                            marginVertical: '1%',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <Text style={{ flex: 1 }}>아이디</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setId(text)} value={id} returnKeyType="next" />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: '2%',
                            marginVertical: '1%',
                            alignItems: 'center',
                            flex: 1,
                        }}
                    >
                        <Text style={{ flex: 1 }}>비밀번호</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                <Button style={{ flex: 1 }} title="Login" onPress={() => console.log(`ID: ${id}, Password: ${password}`)} />
                <Button style={{ flex: 1 }} title="Join" onPress={() => console.log('회원가입!')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        flex: 3,
        margin: 'auto',
        borderWidth: 1,
        // padding: 20,
        paddingHorizontal: 10,
        color: 'black',
    },
});
