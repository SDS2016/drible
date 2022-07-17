import React from 'react'
import AcceptButton from './AcceptButton'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import DenyButton from './DenyButton'


const ActivityNotification = () => {
  return (
    <TouchableOpacity activeOpacity={.6}>
    <View style={styles.top}>

      <View style={styles.userTwoPic} >
      <Image 
        style={styles.img}
        source={require("/Users/ericfreeman/Documents/drible/assets/player.png")} />
      </View>
              <View style={styles.wordsContainer}>
                <Text style={{color:'white',fontSize:14, marginLeft:2,fontWeight:'600',}}> Josh Durby</Text>
                <Text numberOfLines={1} style={{color:'grey', fontSize:13, marginLeft:4,}} >Wants to follow you
                </Text>
              </View>
          <View style={styles.buttonsView}>
          <AcceptButton/>
          <DenyButton/>
          </View>
         
      </View>
      <View
              style={{
              marginTop: 2,
              //width:'80%',
              borderStartWidth:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
      </TouchableOpacity>
      
   
  );
}

export default ActivityNotification;

const styles = StyleSheet.create({

  
    
 top:{
        height:70,
        flexDirection:'row',
        backgroundColor:'black',
        marginLeft:10,
        marginRight:15,
      
        
        
    },

    wordsContainer:{
      flexDirection:'column',
      //flexWrap:'wrap',
      width:'40%',
      //borderColor:'white',
      borderWidth:3,
      justifyContent:'center',
      // alignItems:'center',
    },
    
    buttonsView:{
      
      width:'40%',
      flexDirection:'row',
      marginLeft:10,
      //borderColor:'white',
      borderWidth:3,
      justifyContent:'center',
      alignItems:'center',



    },

    img:{
      resizeMode:'cover',
      width:60,
      height:60,
      borderRadius:100,

    },


    userTwoPic:{
        width:'20%',
        //borderColor:'white',
        borderWidth:3,
        justifyContent:'center',
        alignItems:'center',
        
    },



   


})