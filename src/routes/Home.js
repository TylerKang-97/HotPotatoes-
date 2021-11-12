import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Text>홈화면</Text>
            <Button
                title="Go to Detail"
                onPress={() => {
                    navigation.navigate('Details');
                }}
            />
            <Button
                title="Go to Test"
                onPress={() => {
                    navigation.navigate('Test');
                }}
            />
            <Button
                title="Go to Login"
                onPress={() => {
                    navigation.navigate('Login');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pageTitle: {
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 24,
    },
});

export default Home;
