import * as React from "react";
import {Text, View} from 'react-native';
import Button from "../util/Button";

export function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Button
                text= { "Profile" }
                onPress={""}
                buttonType={"ux"}
            />
            <Button
                text= { "Notifications" }
                onPress={""}
                buttonType={"ux"}
            />
            <Button
                text= { "Appearance" }
                onPress={""}
                buttonType={"ux"}
            />

            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}/>
            <Button
                text= { "Logout" }
                onPress={""}
                buttonType={"logout"}
            />

        </View>
    );
}
