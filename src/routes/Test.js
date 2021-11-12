import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Test = () => {
    const [comment, setComment] = useState('');

    return (
        <View style={styles.container}>
            <Text>{comment ? comment : '글을 입력해 주세요 :)'}</Text>
            <Text>Welcome Tyler!</Text>
            <StatusBar style="auto" />
            <TextInput style={styles.input} onChangeText={(text) => setComment(text)} value={comment} returnKeyType="done" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDEAEB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default Test;
