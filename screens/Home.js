import * as React from 'react';
import { Text, View } from 'react-native';
import Button from "../util/Button";
import {createStackNavigator, StackNavigation} from '@react-navigation/stack';

const Stack = createStackNavigator();

var workoutList = [
    {
        name: "Workout 1",
        numberOfExercises: 5,
    },
    {
        name: "Workout 2",
        numberOfExercises: 8,
    }
];

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
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button
                text= { "New Workout" }
                onPress={""}
            />
            <Button
                text= {workoutList[0].name}
                onPress={""}
                description={ workoutList[0].numberOfExercises}
            />
            <Button
                text = {workoutList[1].name}
                onPress={""}
                description={ workoutList[1].numberOfExercises}
            />

        </View>
    );

}
