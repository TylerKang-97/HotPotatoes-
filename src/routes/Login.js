import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BottomNav from '../components/BottomNav';
import Pages from '../components/Pages';

const Login = ({ navigation, locale, pages }) => {
    const page = pages;
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text>뜨거운 감자</Text>
            </View>
            <View style={styles.mainScreen}>
                <Text>LoginScreen</Text>
            </View>
            <View>
                <Button title="BACK TO HOME" onPress={() => navigation.goBack()} />
            </View>
            <BottomNav locale={locale} now={'login'} navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingBottom: '2%',
        color: 'white',
    },
    topBar: {
        backgroundColor: 'tomato',
        flex: 1,
        justifyContent: 'center',
    },
    mainScreen: {
        flex: 9,
        justifyContent: 'center',
    },
    bottomBar: {
        flex: 1,
    },
});

export default Login;
