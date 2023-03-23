import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const MessageProfilePic = () => {


  return (
    <View style={styles.profilePicContainer}>
        <Image
        style={styles.img}
        source={require('../../assets/player.png')}
        />
      <Text style={{fontSize:13,color:"white", fontWeight:"600",}}>Josh Durby</Text>
    </View>
  )
}

export default MessageProfilePic

const styles = StyleSheet.create({

    profilePicContainer:{
        height:50,
        width:100,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",

    },

    img:{
        height:50,
        width:50,
        borderRadius:30,
        resizeMode: 'cover',
        marginBottom:5,
    },


})