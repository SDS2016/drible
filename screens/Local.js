import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button , ScrollView} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import Map from '../components/Map';
import MapView from 'react-native-maps';
import FilterButtons from "../components/FilterButtons";

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
        handleStyle={{
        backgroundColor:'black',
        borderTopStartRadius:15,
        borderTopEndRadius:15,  
      }}
        handleIndicatorStyle={{
        width:70,
        backgroundColor:'grey'
      
      
      
      }}
        //onChange={handleSheetChanges}
        
      >
            <View style={styles.contentContainer} >
                <View style={styles.filter}>
                    
                      <View style={styles.filterButtons}>
                        <ScrollView horizontal={true}>
                        <FilterButtons name={'busy😁'}/>
                        <FilterButtons name={'5-10 miles'}/>
                        <FilterButtons name={'indoor courts'}/>
                        <FilterButtons name={'outdoor courts'}/>
                      
                        </ScrollView>
                      </View>
                    </View>
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
    backgroundColor:'black',
   // alignItems: 'center',
    
  },



  /// filter bar in bottom sheet /////
  
  filter: {
    height:40,
    weight:'100%',
    flexDirection:"row",
    marginTop:7,
    marginLeft:10,
    marginRight:10,
    



   
  },

  filterButtons:{
    width:'100%',
  
    


  },
  
 })