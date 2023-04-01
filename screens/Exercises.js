import * as React from "react";
import { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, UIManager } from 'react-native';
import FlatButton from "../util/Button";
import { AccordionList } from "react-native-accordion-list-view";

// make groups of exercises; click on group to expand exercise; click on any exercise to open with option to add to workout

const chestWorkouts = [
    {
        name: "Bench Press",
        description: "Lie flat on your back with a barbell, and lower it to your chest before pressing it back up."
    },
    {
        name: "Push-Ups",
        description: "Start in a plank position with your hands under your shoulders, and lower your body until your chest touches the ground.",
    },
    {
        name: "Chest Flys",
        description: "Lie on your back with your arms outstretched, and bring your arms together above your chest.",
    }
]

const backWorkouts = [
    {
        name: "Deadlifts",
        description: "Start with a barbell on the ground, and lift it up to hip level with a straight back.",

    },
    {
        name: "Pull-Ups",
        description: "Hang from a bar with your hands shoulder-width apart, and pull yourself up until your chin is above the bar.",

    },
    {
        name: "Rows",
        description: "Hold a barbell with both hands, and pull it up to your chest while bending your elbows.",

    }
]

const legWorkouts = [
    {
        name: "Squats",
        description: "Stand with your feet shoulder-width apart, and lower your body as if you were sitting in a chair.",

    },
    {
        name: "Lunges",
        description: "Step forward with one leg and lower your body until your front thigh is parallel to the ground.",

    },
    {
        name: "Deadlifts",
        description: "Start with a barbell on the ground, and lift it up to hip level with a straight back.",

    }
]

const armWorkouts = [
    {
        name: "Bicep Curls",
        description: "Hold a dumbbell in each hand, and lift them up to your shoulders while keeping your elbows close to your body.",

    },
    {
        name: "Tricep Dips",
        description: "Sit on a bench with your hands behind you, and lower your body until your arms are at a 90-degree angle.",

    },
    {
        name: "Hammer Curls",
        description: "Hold a dumbbell in each hand with your palms facing each other, and lift them up to your shoulders.",

    }
]

const workoutData = [
    {
        id: 0,
        title: "Chest",
        body: "body",
    }
];

export function ExercisesScreen() {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AccordionList>
                    data={workoutData}
                    customTitle={item => <Text>{item.title}</Text>}
                    customBody={item => <Text>{item.body}</Text>}
                    animationDuration={400}
                    expandMultiple={true}
                </AccordionList>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '100%',
        backgroundColor: '#e7e7e7',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        textAlign: 'center',
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
});
