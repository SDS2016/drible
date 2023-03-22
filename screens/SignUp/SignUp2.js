import { StyleSheet, Text, View, useState , SafeAreaView,TextInput, TouchableOpacity,TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import TextField from '../button-etc/TextField'
import ProgressBar from './ProgressBar'
import ActionButton from '../button-etc/ActionButton'
import React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { getAuth, createUserWithEmailAndPassword,} from "firebase/auth";


const SignupSchema = Yup.object().shape({
     email: Yup.string()
     .email('Invalid email')
     .required('Please enter a valid email'),
      
     password: Yup.string()
       .min(7, 'password must be at least 7 characters!')
       .max(50, 'password is too long!')
       .required('Required')
       .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
       'Must contain minimum 8 characters, one uppercase letter, one number and one special character'
       
       ),
     confirmPassword: Yup.string()
        .min(7, 'password must be at least 7 characters!')
        .max(50, 'password is too long!')
        .oneOf([Yup.ref('password')], 'passwords do not match')
        .required('Required')

   });


const SignUp2 = ({navigation}) => {
  

  
  
const handleSubmit = (values) => {

  const auth = getAuth();
createUserWithEmailAndPassword( auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 
    navigation.navigate("SignUp3");
    const user = userCredential.user;
    
    
    // ...
  })
  .catch((error) => {
    alert(error.message);
  });
}
 
 
 return (
  <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.container}
  >
<TouchableWithoutFeedback onPress={() =>{
Keyboard.dismiss(); }}> 
        <View style={styles.container}>
          
        <SafeAreaView>
          <View style={{ height:80, backgroundColor:"black", marginRight:5, alignItems:"center", marginTop:180, marginBottom:10, zIndex:3,}}>
              <ProgressBar/>
          </View >


        <View style={styles.formContainer} >
      <Formik
      initialValues={{ 
        email: '',
        password: '',
        confirmPassword: '', 
      
      }}
      validationSchema={SignupSchema}
      onSubmit={value => handleSubmit(value)}
      
      >
        {({ handleChange, handleBlur, setFieldTouched, handleSubmit, errors, touched, values }) => (
          <View style={{ marginBottom:420,  }}>
          <Text style={styles.formTextTitles}>Email</Text>
          <TextInput
            onChangeText={handleChange('email')}
            value={values.email}
            onBlur={()=> setFieldTouched('email')}
            // // placeholder={placeholder}
            // placeholderTextColor={"white"}
            autoCapitalize={false}
            selectionColor={'white'}
            style={styles.textButton}
            >
          </TextInput>
          {touched.email && errors.email && (<Text style={styles.errorMessage}>{errors.email}</Text>)}
          
          <Text style={styles.formTextTitles}>Password</Text>
          <TextInput
            onChangeText={handleChange('password')}
            value={values.password}
            onBlur={()=> setFieldTouched('password')}
            // placeholder={placeholder}
            // placeholderTextColor={"white"}
            autoCapitalize={false}
            secureTextEntry={true}
            selectionColor={'white'}
            style={styles.textButton}
            >
          </TextInput>
          {touched.password && errors.password && (<Text style={styles.errorMessage}>{errors.password}</Text>)}

          <Text style={styles.formTextTitles}>Confirm Password</Text>
          <TextInput
            onChangeText={handleChange('confirmPassword')}
            value={values.confirmPassword}
            onBlur={()=> setFieldTouched('confirmPassword')}
            // placeholder={placeholder}
            // placeholderTextColor={"white"}
            autoCapitalize={false}
            secureTextEntry={true}
            selectionColor={'white'}
            style={styles.textButton}
            >
          </TextInput>
          {touched.confirmPassword && errors.confirmPassword && (<Text style={styles.errorMessage}>{errors.confirmPassword}</Text>)}
      
            
              <View style={{minWidth:"90%",maxWidth:"90%",alignItems:'center',justifyContent:'center', }}>
                <TouchableOpacity activeOpacity={.7} onPress={handleSubmit}>
                  <View style={styles.actionButton}>
                    <Text style= {styles.title} > Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
        </View>
        )}
      </Formik>
        </View>
        </SafeAreaView>
      </View>
</TouchableWithoutFeedback>
     </KeyboardAvoidingView>
  )
}

export default SignUp2

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black",
},

formTextTitles:{
    marginTop:5,
    // backgroundColor:"red",
    color:"grey",
    fontSize:15,
    // flexDirection:"row",
   alignSelf:"flex-start",

},


formContainer:{
    marginTop:1,
    // backgroundColor:"yellow",
    height:"80%",
    minWidth:"90%",
    maxWidth:"90%",
    marginBottom:180,
    justifyContent:"center",
    alignItems:"center",
    
},

textButton:{
  fontSize:17,
  color:'white',
  marginLeft:2,
  padding:12,
  flexDirection:'row',
  minWidth:"90%",
  maxWidth:"90%",
  alignItems:'center',
  justifyContent:'center',
  margin:5,
  marginTop:10,
  backgroundColor:'black',
  borderColor:'white',
  borderRadius: 8,
  borderColor: "white",
  borderWidth:2,

},

errorMessage:{
  color:"red",
  fontSize:12,

},

// thirdRowContainer:{
//   minWidth:"90%",
//   maxWidth:"90%",
//   // paddingLeft:40,
//   flexDirection:"row",
  
//   alignItems:"flex-start",   
//   justifyContent:"space-evenly",
//   backgroundColor:"purple",
//   // borderColor:'white',
//   // borderRadius: 8,
//   // borderColor: "white",
//   // borderWidth:1.7,
  

// },

// fourthRowContainer:{
//   minWidth:"90%",
//   maxWidth:"90%",
//   // paddingLeft:40,
//   flexDirection:"row",
//   alignItems:"center",   
//   justifyContent:"space-evenly",
//   backgroundColor:"pink",
//   // borderColor:'white',
//   // borderRadius: 8,
//   // borderColor: "white",
//   // borderWidth:1.7,

// },

// state:{
//   fontSize:17,
//   color:'white',
//   padding:12,
  
//   // flexDirection:'row',
//   minWidth:"100%",
//   maxWidth:"100%",
//   // alignItems:'center',
//   // justifyContent:'center',
//   // margin:5,
//   marginTop:7,
//   backgroundColor:'black',
//   borderColor:'white',
//   borderRadius: 8,
//   borderColor: "white",
//   borderWidth:2,

// },

// zipCode:{
//   // flexBasis:"auto",
//   fontSize:17,
//   color:'white',
//   padding:12,
//   // flexDirection:'row',
//   minWidth:"95%",
//   maxWidth:"95%",
//   // alignItems:'center',
//   // justifyContent:'center',
//   marginTop:7,
//   backgroundColor:'black',
//   borderColor:'white',
//   borderRadius: 8,
//   borderColor: "white",
//   borderWidth:2,

// },

// apt:{
//   // flexBasis:"auto",
//   fontSize:17,
//   color:'white',
//   padding:12,
//   // flexDirection:'row',
//   minWidth:"100%",
//   maxWidth:"100%",
//   // alignItems:'center',
//   // justifyContent:'center',
//   marginTop:7,
//   backgroundColor:'black',
//   borderColor:'white',
//   borderRadius: 8,
//   borderColor: "white",
//   borderWidth:2,
// },

// city:{
//   // flexBasis:"auto",
//   fontSize:17,
//   color:'white',
//   padding:12,
//   // flexDirection:'row',
//   minWidth:"85%",
//   maxWidth:"85%",
//   // alignItems:'center',
//   // justifyContent:'center',
//   marginTop:7,
//   backgroundColor:'black',
//   borderColor:'white',
//   borderRadius: 8,
//   borderColor: "white",
//   borderWidth:2,
// },

// gender:{
//   // flexBasis:"auto",
//   fontSize:17,
//   color:'white',
//   padding:12,
//   // flexDirection:'row',
//   minWidth:"100%",
//   maxWidth:"100%",
//   // alignItems:'center',
//   // justifyContent:'center',
//   marginTop:7,
//   backgroundColor:'black',
//   borderColor:'white',
//   borderRadius: 8,
//   borderColor: "white",
//   borderWidth:2,
// },

/////////////////////// ACTION BUTTON /////////////////////////
title:{
fontSize:24,
fontWeight:"600",
},

actionButton:{
// flexDirection:'row',
minWidth:"100%",
maxWidth:"100%",
alignItems:'center',
justifyContent:'center',
padding:9,
marginTop:30,
backgroundColor:'#FF2035',
borderRadius: 8,
//borderWidth:10,
},

})