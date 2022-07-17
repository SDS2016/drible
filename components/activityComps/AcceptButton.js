import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'


const AcceptButton = () => {
  return (
 <TouchableOpacity activeOpacity={.8}>
    <View style={styles.outer}>
        <Text 
        style={styles.inner}> 
        Accept
        </Text>
    </View>
</TouchableOpacity>
  )
}

export default AcceptButton;

const styles = StyleSheet.create({
    
    outer:{
        padding:5,
        paddingLeft:12,
        paddingRight:12,
        // borderWidth:1,
        borderRadius:6,
        marginRight:10,
        backgroundColor:'#FF2035',
        borderColor:'transparent',

    },

    inner:{
        color:'white',
        fontSize:12,
        fontWeight:'700',
        
    },



})