import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '2%',
    },
    topBar: {
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
