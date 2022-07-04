import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,  TextInput,Keyboard, TouchableWithoutFeedback } from 'react-native'




const Inbox = () => {
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();

    }}>
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Inbox</Text>
          <View
              style={{
              marginTop: 5,
              width:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
      </View>

      
        <View>
            <TextInput 
            placeholder='Search...'
            
            placeholderTextColor={'#3F3F40'}
            
            style={styles.search}
            />
        </View>
        
        <View
              style={{
              marginTop: 2,
              width:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
          
      </SafeAreaView>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Inbox;

const styles = StyleSheet.create({
  
  container:{
  flex: 1, 
  backgroundColor:'black',
  
},

title: {
  color:'white',
  paddingLeft: 20,
  fontSize:40,
  fontWeight:'bold',
  fontFamily:'Helvetica Neue',
},

search:{
    flex:1,
    marginLeft:20,
    paddingLeft:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#1A1A1A',
    padding:17,
    margin:10,
    width:'88%',
    borderRadius:12,
    backgroundColor:'#1A1A1A',
},






 




})