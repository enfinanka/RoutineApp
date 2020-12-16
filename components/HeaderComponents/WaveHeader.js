import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';

export default function WaveHeader({ customStyles }) {
 

  return (
    <View style={customStyles}>
      <Animated.View style={{ 
        backgroundColor: '#3F4155', 
        height: 160,
        width: Dimensions.get('window').width
        }}>
        <Svg
          height="90%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ 
            position: 'absolute', 
            top: 130,  
            shadowColor: "#0D0F2B",
            shadowOffset: {
              width: 0,
              height: 5
            },
          shadowOpacity: 0.3,
          shadowRadius: 0.5, 
        }}>
          <Path
            fill="#3F4155"
            d="M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,74.7C672,85,768,139,864,144C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"            />
        </Svg>
      </Animated.View>
    </View>
  );
}
