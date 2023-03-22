import { Image, ImageBackground, StyleSheet, Text, View,} from 'react-native'
import BottomSheet from "@gorhom/bottom-sheet";
import BackButton from '../../screens/button-etc/BackButton';
// import CourtData from './CourtData'
import React ,{ useRef, useMemo, useLayoutEffect} from 'react'


 


const CourtCardsScreen = ({navigation}) => {

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['62%', '95%'], []);

useLayoutEffect(() => {


  return () => {
   <CourtCardsScreen/>
  };
}, [<CourtCardsScreen/>])


  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        
         <ImageBackground
          // resizeMode="cover"
          imageStyle={{ 
          height:"100%",
          width:"100%",
          resizeMode:"cover",
        }}
        style={styles.image}
          source={{
            uri:'https://images.squarespace-cdn.com/content/v1/5a9dd1c24cde7acca5cda1e5/1604505041205-O06TG78RBBKXTMARSTVX/mhp.jpg?format=750whttps://images.squarespace-cdn.com/content/v1/5a9dd1c24cde7acca5cda1e5/1611531037207-2FEOYVKSZYYU9OVHPC16/sanpablopark04.jpg?format=750w',
        }}
        >
          <BackButton 
          // style={{
          //   marginTop:40,
          // }}
          onPress={()=>{navigation.goBack()}}/>
          </ImageBackground>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleStyle={{
        backgroundColor:'black',
        borderTopStartRadius:15,
        borderTopEndRadius:15,  
      }}
    //     handleIndicatorStyle={{
    //     width:70,
    //     backgroundColor:'grey'
      
      
      
    //   }}
        //onChange={handleSheetChanges}
        
      >
            <View style={styles.contentContainer} >
               <Text style={{color:"white",fontSize:30, bottom:7,fontWeight:"500",}}> Veterans Park</Text>
               <View
              style={{
              marginTop: 10,
              width:'90%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
              }}
              />

              <View
              style={{
              marginTop: 55,
              width:'90%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
              }}
              />

              
              </View>
        </BottomSheet>


    </View>
  )
}

export default CourtCardsScreen

const styles = StyleSheet.create({

    container:{
        flex:1, 
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
      },
      
      contentContainer: {
        flex:1,
        backgroundColor:'black',
      alignItems: 'center',
        
      },

      imageContainer:{
        
        position:"absolute",
        height:"40%",
        minHeight:"60%",
        width:"100%", 
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black",
      }, 
        
     


      image:{
        
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        // justifyContent: "center"
      },

})