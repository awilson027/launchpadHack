import * as React from 'react';
import { Text, View } from 'react-native';
import Button from "../util/Button";
import {createStackNavigator, StackNavigation} from '@react-navigation/stack';

export default function ModifyWorkout({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text>Modify Workout 1</Text>
        </View>
    )
}
