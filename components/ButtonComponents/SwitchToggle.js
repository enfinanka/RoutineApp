import React from 'react';
import { Switch, View } from 'react-native';

export default function SwitchToggle(props) {
  const { setAlert, alert, disabled } = props

  return (
    <View>
      <Switch
        disabled={disabled}
        trackColor={{ false: "red", true: "#EBB000" }}
        thumbColor={alert ? "#fff" : "#fff"}
        ios_backgroundColor="#8B8A8A"
        onValueChange={() => setAlert(!alert)}
        value={alert}
      />
    </View>
  );
}