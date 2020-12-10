import React from 'react';
import { Switch, View } from 'react-native';

export default function SwitchToggle(props) {
  const { setAlert, alert } = props

  return (
    <View>
      <Switch
        trackColor={{ false: "#E0E0E0", true: "#EBB000" }}
        thumbColor={alert ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#A4A4A4"
        onValueChange={() => setAlert(!alert)}
        value={alert}
      />
    </View>
  );
}