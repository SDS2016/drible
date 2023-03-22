import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'


const DenyButton = ({title}) => {

    
  return (
 <TouchableOpacity activeOpacity={.8}>
    <View style={styles.outer}>
        <Text 
        style={styles.inner}> 
        {title}
        </Text>
    </View>
</TouchableOpacity>
  );
}

export default DenyButton;

const styles = StyleSheet.create({
    
    outer:{
        padding:5,
        paddingLeft:16,
        paddingRight:16,
        // borderWidth:1,
        borderRadius:6,
        marginRight:20,
        backgroundColor:'grey',
        borderColor:'transparent',

    },

    inner:{
        color:'white',
        fontSize:12,
        fontWeight:'700',
        
    },



})