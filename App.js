import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/routes/Home';
import Details from './src/routes/Details';
import Test from './src/routes/Test';
import { Login } from './src/routes/Login';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} navigation={Stack.Navigator} />
                <Stack.Screen name="Details" component={Details} navigation={Stack.Navigator} />
                <Stack.Screen name="Test" component={Test} navigation={Stack.Navigator} />
                <Stack.Screen name="Login" component={Login} navigation={Stack.Navigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
