import * as React from "react";
import { Text, View, SectionList, StyleSheet } from 'react-native';
import FlatButton from "../util/Button";

// make groups of exercises; click on group to expand exercise; click on any exercise to open with option to add to workout

const workoutData = [  {    muscleGroup: "Chest",    workouts: [      {        name: "Bench Press",        description: "Lie flat on your back with a barbell, and lower it to your chest before pressing it back up.",        image: require("./images/bench-press.jpg")      },      {        name: "Push-Ups",        description: "Start in a plank position with your hands under your shoulders, and lower your body until your chest touches the ground.",        image: require("./images/push-ups.jpg")      },      {        name: "Chest Flys",        description: "Lie on your back with your arms outstretched, and bring your arms together above your chest.",        image: require("./images/chest-flys.jpg")      }    ]
},
    {
        muscleGroup: "Back",
        workouts: [
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
    },
    {
        muscleGroup: "Legs",
        workouts: [
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
    },
    {
        muscleGroup: "Arms",
        workouts: [
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
    }
];


const listOfExercises = [ { muscleGroup: "Chest" }]


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
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
