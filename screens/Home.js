import * as React from 'react';
import { Text, View } from 'react-native';
import FlatButton from "../util/Button";
import {createStackNavigator, StackNavigation} from '@react-navigation/stack';

const Stack = createStackNavigator();

var workoutList = new Array();

function stacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                          component={HomeScreen} />

        </Stack.Navigator>
    )
}

export function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            //<FlatButton text='Pull Day: 1' onPress={props.handle} />
        </View>
    );

}
