import React from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';

export default function NoActivities(props) {

  const { today, daysToDisplay } = props;
  const dayStartsWith = today.substring(0,3);

  console.log(daysToDisplay, 'in noactivitess')

  const position = new Animated.ValueXY({x: 0, y: 1500});
  const opacity = new Animated.Value(0);

  Animated.spring(position, {
    toValue: {x: 100, y: 0},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.timing(opacity, {
    toValue: 1,
    duration: 2500,
    useNativeDriver: true,
    bounciness: 1,
    delay: 500,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.View
          style={{
            transform: [
              { translateY: position.y }
            ]
          }}>
        <View style={styles.textContainer}>
          <Image source={require('../../assets/lonely.png')} style={styles.image}/>
          <Text style={styles.textAnimation}>You have no activities</Text>
        </View>
      </Animated.View>
      <Animated.View 
        style={{
          opacity: opacity,
          marginTop: 100
        }}>
        <Text style={styles.guideToButton}>Press the button to add a new activity</Text>
      </Animated.View>
    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 100,
    margin: 80,
    backgroundColor: '#3F4155',
    padding: 40,
    borderRadius: 1000,
    shadowColor: '#111324',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 15
  },
  textAnimation: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  guideToButton:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 100
  },
});