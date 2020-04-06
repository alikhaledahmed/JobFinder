import React, { Component } from 'react';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import GateScreen from './src/screens/GateScreen';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { navigationRef } from './src/RootNavigation';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const StackNavigator = createStackNavigator();

const StackNavigatorScreen = () => (
    <StackNavigator.Navigator>
        <StackNavigator.Screen name="Review Jobs" component={ReviewScreen} />
        <StackNavigator.Screen name="Settings" component={SettingsScreen} />
    </StackNavigator.Navigator>
);

const MainTab = createBottomTabNavigator();
const MainTabScreen = () => (
    <MainTab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Deck" component={DeckScreen} />
        <Tab.Screen name="ReviewNavigator" component={StackNavigatorScreen} />
    </MainTab.Navigator>
);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer ref={navigationRef}>
                    <Tab.Navigator>
                        <Tab.Screen name="Gate" component={GateScreen} options={{ tabBarVisible: false }} />
                        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ tabBarVisible: false }} />
                        <Tab.Screen name="Auth" component={AuthScreen} options={{ tabBarVisible: false }} />
                        <Tab.Screen name="Main" component={MainTabScreen} options={{ tabBarVisible: false }} />
                    </Tab.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;