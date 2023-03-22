import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


const PencilButton = (na) => {

       


  return (
    <View style={styles.pencilContainer}>
        <TouchableOpacity activeOpacity={.8}>
            <View style={styles.pencilImage} >
                <Image
                    style={styles.pencil}
                    source={require('/Users/ericfreeman/Documents/drible/assets/chatbutton.png')}
                />
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default PencilButton

const styles = StyleSheet.create({

pencilImage:{
    height:75,
    width:75,
    borderRadius:"50%",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF2035',
    

},

pencil:{
    height:40,
    width:40,
   
},

pencilContainer:{
    bottom:0,
    flexDirection:"row-reverse",
    position:"absolute",
    height:"25%",
    // marginBottom:"-10%",
    width:"95%",
    

},
})