import React, { useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, Platform, UIManager} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import Button from "../util/Button";

export const ExercisesScreen = () => {
    const data = [
        {
            id: 0,
            title: 'Deadlift',
            body: "The deadlift is a compound movement that targets mainly the glutes, hamstring, and back.",
        },
        {
            id: 1,
            title: 'Bent-over Row',
            body: "The bent-over row is a multi-jointed exercises that primarily works the latissimus dorsi also known as the lats, middle and lower trapezius, the rhomboids, as well as the posterior deltoids.",
        },
        {
            id: 2,
            title: 'Pull-Up',
            body: "The pull-up is an upper-body closed chain movement focusing on the lat, trapezius, as well as throacic erector spinae.",
        },
        {
            id: 3,
            title: 'Landmine One-Arm Row',
            body: "The landmine is a great utilization of the barbell focusing on a multitude of muscle groups mainly the deltoids, trapezius, erector spinae, lat, and glutes.",
        },
        {
            id: 4,
            title: 'Seated Cable Row',
            body: "The seated row has several variations all targeting a general area of the back, specifically targeting the erector spinae, and lats",
        },
    ];
    useEffect(() => {
        if (Platform.OS === 'android') {
            if (UIManager.setLayoutAnimationEnabledExperimental) {
                UIManager.setLayoutAnimationEnabledExperimental(true);
            }
        }
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AccordionList
                    data={data}
                    customTitle={item => <Text>{item.title}</Text>}
                    customBody={item => <Text>{item.body}</Text>}

                    animationDuration={400}
                    expandMultiple={true}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        paddingHorizontal: '3%',
        height: '100%',
        backgroundColor: '#e7e7e7',
    },
});

