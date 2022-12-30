import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'


const ActionButton = ({title}) => {
  return (

<TouchableOpacity activeOpacity={.7}>
    <View style={styles.actionButton}>
      <Text style= {styles.title}>{title}</Text>
    </View>
</TouchableOpacity>

  )
}

export default ActionButton

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:"600",
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
    backgroundColor:'#FF2035',
    borderRadius: 30,
    //borderWidth:10,
}

})