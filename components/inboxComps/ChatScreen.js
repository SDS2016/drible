import { StyleSheet, Text, View, TouchableWithoutFeedback, 
         Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import TextField from '../../screens/button-etc/TextField'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatScreen = () => {
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
    <TouchableWithoutFeedback onPress={() =>{
     Keyboard.dismiss(); }}>       
        <View style={{flex:1, backgroundColor:"green", justifyContent:"center", alignItems:"center", flexDirection:"column-reverse", 
        }}>
            <SafeAreaView>
                <Text>ChatScreen</Text>

                <View style={{ height:100, width:"100%", padding:20, backgroundColor:"white", justifyContent: 'center', alignItems:"center",
                    }}> 
                    
                        <TextField/>
                    </View>
                
                
            </SafeAreaView>
        </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
      },


})