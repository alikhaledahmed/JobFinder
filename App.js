import React, { Component } from 'react';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

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
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Welcome" component={WelcomeScreen} />
                    <Tab.Screen name="Auth" component={AuthScreen} />
                    <Tab.Screen name="Main" component={MainTabScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;