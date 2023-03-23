import React, { useCallback, useRef, useMemo, useState, useEffect, } from "react";
import { StyleSheet, View, Text, Button , ScrollView, TouchableOpacity,Image,SafeAreaView} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import Map from '../components/Map';
import MapView, {Marker} from 'react-native-maps';
import * as Haptics from 'expo-haptics';
import CustomMarker from "../components/localComps/CustomMarker";
import CourtCard from "../components/localComps/CourtCard";
import { db } from "./Firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";




const hapticTouch = ()=> {Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}


////////// imports for the firebase data ///////////////////////



const Local = ({navigation}) => {
  
   
  

  //////////////////// useState for Map /////////////////////

  const [mapRegion, setmapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });


  ////////////////////^^^^^^^^^^^^^^^ useState for Map ^^^^^^^^^^^^^^^^^^ /////////////////////

  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '48%'], []);

  // callbacks
 // const handleSheetChanges = useCallback((index: ) => {
  //  console.log('handleSheetChanges', index);

            const [court,setCourt] =useState([]);
            const courtsCollectionRef = collection(db,'courts');

            useEffect(() => {
                const getCourts = async () => {
                const data = await getDocs(courtsCollectionRef);
                setCourt(data.docs.map((doc)=>({...doc.data(), id: doc.id })))

                }
                getCourts()
            }, [])
            

            // const [locate,setLocate] = useState(true);

            // useEffect(() => {
            //   const getUserLocation = async()=>{
            //     await setLocate(false)
            //   }

            //   getUserLocation();

            // }, [locate])
            const [index,setIndex]=useState(0);
            const [refFlatList,setRefFlatList]=useState();
          const onPress=(index)=>{
              setIndex(index);
              refFlatList.scrollToIndex({animated:true,index:index})
          }  

        
        

return (

   
    <View style={styles.container}>


       <MapView 
        maxZoomLevel={20}
        pitchEnabled={true}
        zoomEnabled={true}
        followsUserLocation={false}
        showsMyLocationButton={true}
        rotateEnabled={false}
        scrollEnabled={true}
        showsUserLocation={true}
        tintColor={"#FF2035"}
        userInterfaceStyle={ 'dark'}
        style={{ width:'100%', height: '100%',position:"absolute", }}
        region={mapRegion}
        >
          
          
          {court.map((court,index)=>{
            return(
              <CustomMarker
                onPress={()=>{onPress(index)}}
                coordinates={{     
                   latitude: court.lat,
                   longitude: court.long}}
                   image={require('../assets/generic-ball-custom-marker.png')}
                   />
                   )
                   
          }
          )}
    
      {/* <TouchableOpacity
      activeOpacity={.9}
      > */}
      
        {/* </View> */}
        {/* </TouchableOpacity> */}
    
        </MapView>


        <SafeAreaView>
      <View style={{ 
        position:"absolute",
        flexDirection:"column", 
        justifyContent:"space-evenly",
        alignItems:"center",
        marginHorizontal:130,
        marginTop:-360,  
        // alignSelf:"flex-end", 
        minHeight:150, 
        maxHeight:150,
        minWidth:50, 
        maxWidth:50, 
        // justifyContent:"center",
        // alignItems:"center",
        }}
        // onPress={() => navigation.navigate('CourtCardsScreenStack')}
        >

      {/* <View style={styles.buttonsInnerContainer} > */}
         
        <TouchableOpacity activeOpacity={.6} onPress={hapticTouch}>
        <View style={styles.localRightSideButtons} >
          <Image
            style={styles.signalImage}
            source={require('../assets/signal-button.png')}
          />
        </View>
        </TouchableOpacity>
        
          <View style={styles.localRightSideButtons}>
            <Image
                style={styles.inviteFriendsImage}
                source={require('../assets/invite-friend-button.png')}
              />
          </View>
       
        <View style={styles.localRightSideButtons}>
          <Image
              style={styles.locationEyeImage}
              source={require('../assets/location-eye.png')}
            />
        </View> 
     </View>

</SafeAreaView>
       



{/* //////////////////////// anything below is the bottom sheet ///////////////////////////////////////// */}
     
     
     
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
      >
            <View style={styles.contentContainer} >

        

              
              

              {/* //////////// below is the flatlist /////////// */}
              
                <FlatList
                ref={(ref)=>setRefFlatList(ref)}
                data={court}
                renderItem={({item}) => {
                  console.log(index);
                  return(
  
                    <CourtCard
                    name={item.name}
                    rim={item.rim}
                    light={item.lights}
                    surface={item.surface}
                    image={{uri:item.images[0]}}
                    close={item.close}
                    height={item.height}
                    />
                
  
                 )
                }}
                keyExtractor={(item)=>item.id}
                horizontal={true}
                pagingEnabled={true}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                style={{height:"100%", width:"100%",}}
              />
             
            </View>
        </BottomSheet>
     </View>
   );
  }







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



  // /////////////////////  below is the styles on the mapview //////////////////////////////////
  locationEyeImage:{
    height:30,
    width:30,
    // position:"absolute",
  },
  

  signalImage:{
    height:30,
    width:30,
    marginBottom:4,
    // position:"absolute",
  },

  inviteFriendsImage:{
    height:25,
    width:25,
    // position:"absolute",

  },

  localRightSideButtons:{

    height:40,
    width:40,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
    // position:"absolute",


  },


  buttonsInnerContainer:{
      flexDirection:"column",
      justifyContent:"space-evenly",
      // backgroundColor:"green",
      // position:"absolute",

  },
  
 })


