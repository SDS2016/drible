import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, useState } from 'react-native'




const FilterButtons = ({name}) => {

  return (
    <TouchableOpacity>
        <View style={styles.outer}>
            <Text 
                style={styles.inner}>{name} </Text>
        </View>
    </TouchableOpacity>
  )
}

export default FilterButtons;

const styles = StyleSheet.create({
    outer:{
        padding:5,
        paddingLeft:8,
        paddingRight:8,
        borderWidth:1,
        borderRadius:6,
        borderColor:'white',
        marginRight:20,
        //backgroundColor:'#FF2035',

    },

    inner:{
        color:'white',
        fontSize:12,
        fontWeight:'500',
        
    }


})