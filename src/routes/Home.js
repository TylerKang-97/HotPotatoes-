import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
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
        </View>
    );
};

export default Home;
