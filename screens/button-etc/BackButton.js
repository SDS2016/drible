import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={onPress}>
        <View style={styles.buttonContainer}>
        <Image
        style={{
            width:25,
            height:25,
            marginLeft:5,
            // resizeMode:"contain",
        }}
        source={require('/Users/ericfreeman/Documents/drible/assets/white-back-button.png')}
        />
        </View>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({

    buttonContainer:{
        height:40,
        width:40,
        backgroundColor:'black',
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15,
        marginTop:50,
    },



})