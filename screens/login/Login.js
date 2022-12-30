import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import TextField from '../button-etc/TextField'
import ActionButton from '../button-etc/ActionButton'
import SecondaryButton from '../button-etc/SecondaryButton'
import React from 'react'


const Login = () => {
  return (

    
        <View style={styles.container} >
        <SafeAreaView>
            <Image
            style={styles.wordLogo}
            source={require('/Users/ericfreeman/Documents/drible/assets/word-logo-app.png')}
        />
            <View style={styles.textInputContainer}>
          <TextField style={{marginTop:"70%",alignItems:"center"}} placeholder={"Email"}/>
          <TextField style={{marginTop:"80%",alignItems:"center" }} placeholder={"Password"}/> 
          <ActionButton title="Login"/>
          

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
            <SecondaryButton title="Create Account"/>
            </View>
            
            </View>
              


        </SafeAreaView>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({

    textInputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:"20%",
    },

    wordLogo:{
        marginTop:"55%",
        marginLeft:"30%",
        height:50,
        width:120,
    },



    container: {
        flex: 1, 
      // justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black",

    }







})