import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomMarker = (props) => {

const {coordinates} = props;

  return (
   
    <Marker
          onPress={props.onPress}
          coordinate={coordinates}
          image={require('../../assets/generic-ball-custom-marker.png')}
          />

  );
};

export default CustomMarker;

const styles = StyleSheet.create({})