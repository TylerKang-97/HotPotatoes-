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
    const [locale, setLocale] = useState('kor');
    const [pages, setPages] = useState(Pages.kor);
    const [init, setInit] = useState(false);

    useEffect(() => {
        // setLocale('kor');
        // locale === 'kor' ? setPages(Pages.kor) : setPages(Pages.eng);
        // setPages(Pages.kor)

        if (pages !== null || pages !== undefined) setInit(true);
    }, []);

    const navigation = Stack.Navigator;
    // navigation;
    return init ? (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={pages.home}>
                <Stack.Screen name={pages.home}>
                    {(props) => <Home {...props} pages={pages} navigation={navigation} locale={locale} />}
                </Stack.Screen>
                <Stack.Screen name={pages.test}>
                    {(props) => <Test {...props} pages={pages} navigation={navigation} locale={locale} />}
                </Stack.Screen>
                <Stack.Screen name={pages.login}>
                    {(props) => <Login {...props} pages={pages} navigation={navigation} locale={locale} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    ) : (
        <View>
            <Text>Initializing...</Text>
        </View>
    );
};

export default App;
