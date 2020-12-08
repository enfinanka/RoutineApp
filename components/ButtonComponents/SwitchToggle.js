import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

export default function SwitchToggle(props) {
  const { setAlert, alert } = props

  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#EBB000" }}
        thumbColor={alert ? "#fff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setAlert(!alert)}
        value={alert}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});