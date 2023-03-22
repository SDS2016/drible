import { StyleSheet, Text, View , useState,TextInput} from 'react-native'
import React from 'react'


const InputTemplate = ({placeholder,value,onChangeText }) => {
  const [value, onChangeText] = React.useState("");



  return (

    <View style={styles.button}>
      
      <TextInput
        onChangeText={text=>onChangeText(text)}
        value={value}
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

export default InputTemplate 

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