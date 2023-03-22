import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import React from 'react'

const CustomMarker = (props) => {

const {coordinates} = props;

  return (
    <Marker
          coordinate={coordinates}
          image={require('/Users/ericfreeman/Documents/drible/assets/generic-ball-custom-marker.png')}
          />
          
  );
};

export default CustomMarker;

const styles = StyleSheet.create({})