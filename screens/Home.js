import * as React from 'react';
import { Text, View } from 'react-native';
import Button from "../util/Button";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator, StackNavigation} from '@react-navigation/stack';

import ModifyWorkout from "./ModifyWorkout";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";

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

function HomeStack({ navigation }) {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="New Workout" component={""} />
                <Stack.Screen name="ModifyWorkout" component={ModifyWorkout} />
            </Stack.Navigator>
    )
}

export function HomeScreen({ navigation }) {
    return (
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button
                    text= { "New Workout" }
                    onPress={""}
                    buttonType={"ux"}
                />
                <Button
                    text= {workoutList[0].name}
                    onPress={() => navigation.navigate('ModifyWorkout')}
                    description={ workoutList[0].numberOfExercises}
                    buttonType={"workout"}
                />
                <Button
                    text = {workoutList[1].name}
                    onPress={""}
                    description={ workoutList[1].numberOfExercises}
                    buttonType={"workout"}
                />
            </View>
    );

}
