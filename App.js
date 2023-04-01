import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {HomeScreen} from "./screens/Home.js";
import {ExercisesScreen} from "./screens/Exercises";
import {SettingsScreen} from "./screens/Settings";


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: () => (
                                <Icon name="home" size={20} />
                            ),
                            showIcon: true,
                        }} />
            <Tab.Screen name="Exercises"
                        component={ExercisesScreen}
                        options={{
                            tabBarLabel: 'Exercises',
                            tabBarIcon: () => (
                                <MaterialCommunityIcons name="weight-lifter" size={20} />
                            ),
                            showIcon: true,
                        }} />
            <Tab.Screen name="Settings"
                        component={SettingsScreen}
                        options={{
                            tabBarLabel: 'Settings',
                            tabBarIcon: () => (
                                <Ionicons name="settings-sharp" size={20} />),
                            showIcon: true,
                        }} />

        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
