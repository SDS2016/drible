import { StyleSheet, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import React from 'react'

const CustomMarker = (props) => {

const {coordinates,keys} = props;

  return (
    <React.Fragment
     key={keys}
    >
    <Marker
          coordinate={coordinates}
          image={require('/Users/ericfreeman/Documents/drible/assets/generic-ball-custom-marker.png')}
          />
    </React.Fragment>
          
  );
};

export default CustomMarker;

const styles = StyleSheet.create({})