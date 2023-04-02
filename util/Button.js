import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';

export default ({ text, onPress, description, buttonType }) =>
{
    const buttonStyle = [styles.button];
    const textStyle = [styles.buttonText];
    if(buttonType == "workout") {
        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>{ text }</Text>
                <Text style={styles.secondText}>{ description } Exercises</Text>
            </TouchableOpacity>
        )
    } else if (buttonType == "ux") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.newButton}>
                <Text style={textStyle}>{ text }</Text>
            </TouchableOpacity>
        )
    } else if (buttonType == "logout") {
        return (
            <TouchableOpacity onPress={onPress} style={styles.logoutButton}>
                <Text style={textStyle}>{ text }</Text>
            </TouchableOpacity>
        )
    }

}

const screen = Dimensions.get("window");
const buttonWidth = screen.width*0.9;


const styles = StyleSheet.create({
    newButton: {
        borderRadius: 8,
        paddingVertical: 7,
        paddingHorizontal: 10,
        backgroundColor: '#8c8c8c',
        flex: 0,
        height: 50,
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
    logoutButton: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#e37a7a',
        flex: 0,
        height: 50,
        width: screen.width*0.9,
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 5,
    },
})
