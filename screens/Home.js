import * as React from 'react';
import { Text, View } from 'react-native';
import FlatButton from "../util/Button";

export function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            //<FlatButton text='Pull Day: 1' onPress={props.handle} />
        </View>
    );


}
