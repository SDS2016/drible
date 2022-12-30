import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';





const Map = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    
      <MapView 
        maxZoomLevel={20}
        pitchEnabled={true}
        zoomEnabled={true}
        //followsUserLocation={true}
        showsMyLocationButton={true}
        // rotateEnabled={true}
        scrollEnabled={true}
        showsUserLocation={true}
        tintColor={"#FF2035"}
        userInterfaceStyle={ 'dark'}
        style={{ alignSelf: 'stretch', width:'100%', height: '100%' }}
        region={mapRegion}>
    
    <SafeAreaView>
      <TouchableOpacity
      activeOpacity={.9}
      >
      <View style={{ 
        flexDirection:"row-reverse", 
        marginHorizontal:"5%",
        // marginRight:"20%",
       
        marginTop:"10%",  
        alignSelf:"flex-end", 
        height:100, 
        width:60, 
        backgroundColor:"black"}}>

         
   
        </View>
        </TouchableOpacity>
    </SafeAreaView>
        </MapView>
      
    //you can put anything in here between the mapview tags and it will appear on the map //
    
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