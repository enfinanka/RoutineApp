import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function Welcome() {
 
  const positionCircle = new Animated.ValueXY({x: 1500, y: 1000});
  const positionSquare = new Animated.ValueXY({x: -1500, y: 0});
  const positionCircles1 = new Animated.ValueXY({x: 700, y: 1000});
  const positionCircles2 = new Animated.ValueXY({x: 700, y: 1000});
  const positionCircles3 = new Animated.ValueXY({x: 700, y: 1000});
  const positionRow1 = new Animated.ValueXY({x: -1500, y: 0});
  const positionRow2 = new Animated.ValueXY({x: -1500, y: 0});


  Animated.spring(positionCircle, {
    toValue: {x: 0, y: 0},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionSquare, {
    toValue: {x: 0, y: 0},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionCircles1, {
    toValue: {x: 0, y: 50},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionCircles2, {
    toValue: {x: 0, y: 100},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionCircles3, {
    toValue: {x: 500, y: 150},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionRow1, {
    toValue: {x: 0, y: 100},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();

  Animated.spring(positionRow2, {
    toValue: {x: 0, y: 480},
    speed: 1,
    useNativeDriver: true,
    bounciness: 1,
    delay: 300,
  }).start();


  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.name}>RoutineApp</Text>
      </View>
      <View style={styles.animationWrapper}>
      <Animated.View style={{ 
        positionCircle: 'absolute',
        marginTop: -70,
        // marginLeft: 30,
        transform: [
          { translateX: positionCircle.x }
        ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#3F4155"
            d="M1343 671.5C1343 1042.36 1042.36 1343 671.5 1343C300.641 1343 0 1042.36 0 671.5C0 300.641 300.641 0 671.5 0C1042.36 0 1343 300.641 1343 671.5Z"            />
        </Svg>
      </Animated.View>
      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 100,
        // marginTop: 80,
        transform: [
          { translateX: positionSquare.x }
        ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#5E6170"
            d="M0 131C0 58.6507 58.6507 0 131 0H530C602.349 0 661 58.6507 661 131V695.25C661 767.599 602.349 826.25 530 826.25H131C58.6507 826.25 0 767.599 0 695.25V131Z"/>
          </Svg>
      </Animated.View>
      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 115,
        // marginTop: 80,
        transform: [
          { translateX: positionCircles1.x }
        ],
        transform: [
          { translateY:  positionCircles1.y }
        ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#85BCA9"
            d="M77.0827 38.8528C77.0827 59.9381 59.9897 77.0312 38.9043 77.0312C17.8189 77.0312 0.72583 59.9381 0.72583 38.8528C0.72583 17.7674 17.8189 0.674316 38.9043 0.674316C59.9897 0.674316 77.0827 17.7674 77.0827 38.8528Z"/>          
            </Svg>
      </Animated.View>

      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 115,
        // marginTop: 80,
        transform: [
          { translateX: positionCircles2.x }
        ],
        transform: [
          { translateY:  positionCircles2.y }
        ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#85BCA9"
            d="M77.0827 38.8528C77.0827 59.9381 59.9897 77.0312 38.9043 77.0312C17.8189 77.0312 0.72583 59.9381 0.72583 38.8528C0.72583 17.7674 17.8189 0.674316 38.9043 0.674316C59.9897 0.674316 77.0827 17.7674 77.0827 38.8528Z"/>          
            </Svg>
      </Animated.View>

      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 115,
        // marginTop: 80,
        transform: [
          { translateX: positionCircles3.x }
        ],
        transform: [
          { translateY:  positionCircles3.y }
        ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#85BCA9"
            d="M77.0827 38.8528C77.0827 59.9381 59.9897 77.0312 38.9043 77.0312C17.8189 77.0312 0.72583 59.9381 0.72583 38.8528C0.72583 17.7674 17.8189 0.674316 38.9043 0.674316C59.9897 0.674316 77.0827 17.7674 77.0827 38.8528Z"/>          
            </Svg>
      </Animated.View>

      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 150,
        marginTop: 50,
        transform: [
          { translateX: positionRow1.x }
        ],
        // transform: [
        //   { translateY:  positionRow1.y }
        // ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#E4AB01"
            d="M0.0432129 10.2329C0.0432129 4.71006 4.52037 0.23291 10.0432 0.23291H392.341C397.864 0.23291 402.341 4.71006 402.341 10.2329V52.9139C402.341 58.4368 397.864 62.9139 392.341 62.9139H10.0432C4.52038 62.9139 0.0432129 58.4368 0.0432129 52.9139V10.2329Z" />
            </Svg>
      </Animated.View>

      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 150,
        marginTop: 100,
        transform: [
          { translateX: positionRow2.x }
        ],
        // transform: [
        //   { translateY:  positionRow1.y }
        // ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#E4AB01"
            d="M0.0432129 10.5498C0.0432129 5.02696 4.52037 0.549805 10.0432 0.549805H214.555C220.078 0.549805 224.555 5.02696 224.555 10.5498V54.3705C224.555 59.8933 220.078 64.3705 214.555 64.3705H10.0432C4.52036 64.3705 0.0432129 59.8933 0.0432129 54.3705V10.5498Z" />
            </Svg>
      </Animated.View>

      <Animated.View style={{ 
        position: 'absolute',
        marginLeft: 150,
        marginTop: 150,
        transform: [
          { translateX: positionRow2.x }
        ],
        // transform: [
        //   { translateY:  positionRow1.y }
        // ],
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
        }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 100 1440 320">
          <Path
            fill="#E4AB01"
            d="M0.0432129 10.0068C0.0432129 4.48399 4.52037 0.00683594 10.0432 0.00683594H290.912C296.435 0.00683594 300.912 4.48399 300.912 10.0068V53.8275C300.912 59.3504 296.435 63.8275 290.912 63.8275H10.0432C4.52036 63.8275 0.0432129 59.3504 0.0432129 53.8275V10.0068Z" />
            </Svg>
      </Animated.View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  background: {
    // marginLeft: -100,
    // position: 'absolute',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  animationWrapper: {
    marginLeft: 20
  },
  name: {
    fontSize: 60,
    color: '#85BCA9',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});