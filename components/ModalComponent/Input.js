import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function Header() {
    const [inputActivity, setInputActivity] = useState('');
    const [inputCategory, setInputCategory] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                label="Type your Activity"
                style={styles.input} 
                onChangeText={text => setInputActivity(text)}
                value={inputActivity}
            />
            <TextInput
                label="Category"
                style={styles.input} 
                onChangeText={text => setInputCategory(text)}
                value={inputCategory}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
   paddingBottom: 50,
  },
  input: {
   height: 50,
   margin: 10,
   width: 350,
   color: '#fff',
   textAlign: 'center',
  },
});