import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SecondaryButton = ({title, onPress}) => {
  return (

<TouchableOpacity activeOpacity={.6} onPress={onPress}>
    <View style={styles.actionButton} >
      <Text style= {styles.title}>{title}</Text>
    </View>
</TouchableOpacity>

  )
}

export default SecondaryButton

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"600",
        color:"#FF2035",
    },

actionButton:{
    flexDirection:'row',
    minWidth:"85%",
    maxWidth:"85%",
    alignItems:'center',
    justifyContent:'center',
    padding:9,
    margin:5,
    marginTop:10,
    backgroundColor:'transparent',
    borderRadius: 30,
    borderColor:"#FF2035",
    borderWidth:4,
}

})