import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Map from '../components/Map';
import MapView from 'react-native-maps';

const Local = () => {

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '46%'], []);

  // callbacks
 // const handleSheetChanges = useCallback((index: ) => {
  //  console.log('handleSheetChanges', index);
   


return (

   
    <View style={styles.container}>
       <Map/>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        
        //onChange={handleSheetChanges}
        
      >
        <View style={styles.contentContainer} >
          <Text>Awesome</Text>
        </View>
        
      </BottomSheet>
     </View>
   );
  };







export default Local;

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent:'center',
    alignItems:'center',
  },
  
  contentContainer: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    
  },
  
 })