import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

export default ({ text, onPress, description }) =>
{
    const buttonStyle = [styles.button];
    const textStyle = [styles.buttonText];

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{ text }</Text>
            <Text style={styles.secondText}>{ description } Exercises</Text>
        </TouchableOpacity>
    )
}

const screen = Dimensions.get("window");
const buttonWidth = screen.width*0.9;


const styles = StyleSheet.create({
    newButton: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#8c8c8c',
        flex: 0,
        height: 60,
        width: screen.width*0.9,
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 5,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#bce3b7',
        flex: 0,
        height: 60,
        width: screen.width*0.9,
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 5,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 20,
        textAlign: 'center',
    },
    secondText: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'left',
    },
})
