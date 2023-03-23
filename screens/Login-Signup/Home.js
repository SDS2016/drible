import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import ActionButton from '../button-etc/ActionButton'
import SecondaryButton from '../button-etc/SecondaryButton'
import { useNavigation } from '@react-navigation/native'
import React from 'react'



const Home = ({navigation}) => {
  

  // const navigation = useNavigation()


  
  return (

    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
    <TouchableWithoutFeedback onPress={() =>{
     Keyboard.dismiss(); }}>  
      <View style={styles.container} >
        <SafeAreaView>
            <View style={{ alignItems:'center'}}>

            <View style={{ alignItems:'center'}}>
                <Image
                style={styles.wordLogo}
                source={require('../../assets/app-logo.png')}
                />
                </View >

                <View style={{marginTop:50, justifyContent:'center', alignItems:'center'}}>
                    
                      <ActionButton  title="Sign Up" onPress={()=> navigation.navigate('SignUp1')} />
                   
                    
                    <View style={{marginTop:5,  justifyContent:'center', alignItems:'center',}}>
                    <SecondaryButton title="Login" onPress={()=> navigation.navigate('Login')} />
                    <Text style={{ color:"grey", marginLeft:"5%", marginTop:10,minWidth:"85%", maxWidth:"85%", fontSize:11 }}>By signing up, you agree to the <Text style={{color:"#FF2035"}}>Terms of Service</Text> , 
                            our <Text style={{color:"#FF2035"}}>Privacy  Policy</Text> and <Text style={{color:"#FF2035"}}>Cookies Policy.</Text></Text>
                    
                    
                    </View>
                    
                  



                    <View>
                    <TouchableOpacity activeOpacity={.7}  >
                    <Text style={{ color:"grey", marginTop:20,}}>Forgot Password</Text>
                    </TouchableOpacity>
                    </View>
                </View>
              </View>


        </SafeAreaView>

        </View>
        </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  )
}

export default Home

const styles = StyleSheet.create({

    

    wordLogo:{
        marginTop:"50%",
        height:200,
        width:120,
        resizeMode:"contain",
    },



    container: {
        flex: 1, 
      // justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black",

    }







})