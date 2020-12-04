import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

export default function SwitchToggle(props) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
    <View>
        <Switch
            trackColor={{ false: "#767577", true: "#EBB000" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
    );
}

const styles = StyleSheet.create({
 
});