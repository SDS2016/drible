import { StyleSheet, Text, View , useState} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const TextField = ({placeholder}) => {
  const [text, onChangeText] = React.useState("");



  return (

    <View style={styles.button}>
      
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={"white"}
        selectionColor={'white'}
        style={styles.textButton}
        maxLength={20}
        >
      </TextInput>
    
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({

button:{
  // flexDirection:"row",
  // height:"10%",
  // width:"80%",
  // borderRadius: 25,
  // borderColor: "white",
  // borderWidth:2,

},

textButton:{
    fontSize:17,
    color:'white',
    marginLeft:2,
    paddingLeft:13,
    flexDirection:'row',
    minWidth:"85%",
    maxWidth:"85%",
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    margin:5,
    marginTop:10,
    backgroundColor:'black',
    borderColor:'white',
    borderRadius: 25,
  borderColor: "white",
  borderWidth:2,
},

})