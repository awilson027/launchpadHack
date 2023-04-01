import * as React from "react";
import { Text, View, SectionList, StyleSheet } from 'react-native';
import FlatButton from "../util/Button";

// make groups of exercises; click on group to expand exercise; click on any exercise to open with option to add to workout

export function ExercisesScreen() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: "Back", data: ['Bent-Over Rows', 'Deadlift', 'Lat Pulldown']},
                    {title: "Chest", data: ['Bench Press', 'Cable Crossovers', 'Incline Bench Press'],
                    },
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
}

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
