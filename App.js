import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/routes/Home';
import Login from './src/routes/Login';
import Details from './src/routes/Details';
import Test from './src/routes/Test';

import Pages from './src/components/Pages';

const Stack = createNativeStackNavigator();

const App = () => {
    const [pages, setPages] = useState(Pages.kor);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (pages !== null || pages !== undefined) setInit(true);
    }, [pages]);
    return init ? (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name={pages.home} component={Home} pages={pages} navigation={Stack.Navigator} />
                <Stack.Screen name="Details" component={Details} navigation={Stack.Navigator} />
                <Stack.Screen name="Test" component={Test} navigation={Stack.Navigator} />
                <Stack.Screen name={pages.login} component={Login} pages={pages} navigation={Stack.Navigator} />
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <View>
            <Text>Initializing...</Text>
        </View>
    );
};

export default App;
