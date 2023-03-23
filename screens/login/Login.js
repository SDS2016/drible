import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import TextField from '../button-etc/TextField'
import ActionButton from '../button-etc/ActionButton'
import SecondaryButton from '../button-etc/SecondaryButton'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import React from 'react'
import MainNav from '../../MainNav';





const Login = ({navigation}) => {

const onHandleLogin = () =>{

if(email !== "" && password !== "") {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    // return(<MainNav/>)
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
  });
}
}


const [email,setEmail] = useState("");
const [password,setPassword] = useState("");


  return (

    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
    <TouchableWithoutFeedback onPress={() =>{
     Keyboard.dismiss(); }}>  
        <View style={styles.container} >
        <SafeAreaView>
          <View style={{justifyContent:'center', alignItems:'center',}}>
                <Image
                style={styles.wordLogo}
                source={require('../../assets/word-logo-app.png')}
                />
          </View>


      <View style={{ alignItems:'center',marginTop:50,}}>
          <View style={styles.textInputContainer}>
          <TextField style={{marginTop:"70%",alignItems:"center"}} 
          placeholder={"Email"} 
          placeholderTextColor={"grey"}
          onChangeText={(text)=> setEmail(text)}
          value={email}
          autoCapitalize={false}/>
          <TextField style={{marginTop:"80%",alignItems:"center" }} 
          placeholder={"Password"} 
          secureTextEntry={true}  
          placeholderTextColor={"grey"}
          onChangeText={(text)=> setPassword(text)}
          value={password}
          autoCapitalize={false}/> 
          
          
       {/*   vvvvvvvvvvvv  login button below vvvvvvvvvvvv  */}
          <ActionButton title="Login" onPress={onHandleLogin}/>
          



          <TouchableOpacity activeOpacity={.7}>
            <Text style={{ color:"grey", marginTop:20,}}>Forgot Password</Text>
          </TouchableOpacity>
          
            <View
                    style={{
                    marginTop: 40,
                    width:'100%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: .4,
                    }}
                />


            <View style={{marginTop:20,  justifyContent:'center', alignItems:'center',}}>
            <SecondaryButton title="Create Account" onPress={()=> navigation.navigate('SignUp1')}/>
            </View>
     </View>
            </View>
              


        </SafeAreaView>
        </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({

    textInputContainer:{
        justifyContent:'center',
        alignItems:'center',
        // marginTop:"20%",
        marginBottom:50,
        // backgroundColor:"green",
    },

    wordLogo:{
        
        height:50,
        width:120,
        marginTop:120,
        // backgroundColor:"yellow",
        
    },



    container: {
        flex: 1, 
      // justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black",

    }







})