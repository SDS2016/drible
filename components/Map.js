import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { color } from 'react-native-reanimated';



const Map = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    
      <MapView 
        // maxZoomLevel={20}
        // pitchEnabled={true}
        // zoomEnabled={true}
        // followsUserLocation={true}
       // showsMyLocationButton={true}
        // rotateEnabled={true}
        // scrollEnabled={true}
        showsUserLocation={true}
        tintColor={"#FF2035"}
        userInterfaceStyle={ 'light'}
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      />
    
  );
};
export default Map;
const styles = StyleSheet.create({
  

});














// import React from 'react'
// import { StyleSheet, Text, View, Dimensions} from 'react-native'
// import MapView from 'react-native-maps';



// const Map = () => {
//   return (
//     <View styles={{flex:1, justifyContent:'center',
//     alignItems:'center',  }}>
//     <MapView
//      styles={{  height:'100%', width:'100%',}}
//     initialRegion={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   /></View>
//   )
// }

// export default Map;

// const styles = StyleSheet.create({


// })