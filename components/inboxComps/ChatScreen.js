import { StyleSheet, Text, View, TouchableWithoutFeedback, 
         Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import TextField from '../../screens/button-etc/TextField'
import React, {useState,useEffect,useLayoutEffect,useCallback, Fragment}from 'react'
import { collection,addDoc,orderBy,query,onSnapshot } from 'firebase/firestore'
import { GiftedChat } from "react-native-gifted-chat"
import { TextInput } from 'react-native-gesture-handler'


const Container = ()=>{
  return(
    <View
        style={styles.messageContainer}
    >
      <View style={{
       
        padding:5,
        flexDirection:"row",
        width:"95%",
        borderColor:"#2B2B2B",
        borderWidth:2,
        borderRadius:30,
        justifyContent:"space-between",
        // backgroundColor:"blue",



      }}>
          <MessageInput/>
          
          <View style={{justifyContent:"center",alignItems:"center",minWidth:"20%",
              maxWidth:"20%",}}>
            <SendButton/>
          </View>

      </View>
    </View>
  )
}


const SendButton = ()=>{
  return(
    <View
      style={{
        height:35,
        width:70,
        // paddingTop:1,
        // paddingBottom:1,
        // paddingLeft:8,
        // paddingRight:8,
        
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"red",
        
      }}
    >
      <Text
        style={{
          color:"black",
          fontSize:18,
          fontWeight:"700",

        }}
      >Send</Text>
    </View>
  )
}






// ////////////////////// text input for messages container ///////////////////////////////


const MessageInput = ()=> {
 
  const [message,setMessage]= useState('');

return (
  // <View style={styles.messageContainer}>
    
        <TextInput
              onChangeText={(text)=>setMessage(text)}
              value={message}
              placeholder={'Send a message'}
              placeholderTextColor={"#2B2B2B"}
              selectionColor={"red"}
              multiline={true}
            style={{
              fontSize:17,
              paddingLeft:5,
              paddingRight:5,
              paddingTop:5,
              paddingBottom:5, 
              color:"white",
              // borderColor:"#2B2B2B",
              // borderWidth:2,
              // borderRadius:30,
              minWidth:"80%",
              maxWidth:"80%",
              justifyContent:"center",
              alignSelf:"center",
              // backgroundColor:"green",
            }}
        >
        
        </TextInput> 
        
          
          
        
   
  // </View>

)}






const ChatScreen = () => {
  return (<View style={{flex:1, backgroundColor:"black"}}>
  <GiftedChat 
    messagesContainerStyle={{
        backgroundColor:"#020202",
        
      
        
      //  marginVertical:-70,
       
       
       
       
       
       
        
    }}
    // minComposerHeight={1000}
 
    textInputStyle={{
        
        
        borderColor:"black",
        // borderWidth:2,
        // borderRadius:30,
        // paddingTop:10,
        // paddingBottom:30,
        // paddingLeft:10,
        // marginLeft: "5%",
        // marginRight: "5%",
        // justifyContent:"center",
        // alignItems:"center",
        
        
    }}
    // inverted={false}
    // vvvvv controls the height of text input composer after the keyboard pops up /////
    minInputToolbarHeight={60} 

    minComposerHeight={80}
    // maxComposerHeight={160}
    // renderComposer={MessageInput}
    renderInputToolbar={Container}
    renderSend={()=>{SendButton}}
    alwaysShowSend={true}
    // renderInputToolbar={MessageInput}
    // renderMessage={MessageContainer}
    // bottomOffset={0}
  />
  </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({ 

  messageContainer:{
    flex:1,
    height:80,
    maxHeight:90,
    flexDirection:"row",
    // backgroundColor:"green",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    // marginBottom:-20,
    
    
  },




})

