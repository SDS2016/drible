import { StyleSheet, Text, View, useState,TextInput , TouchableOpacity,TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import ProgressBar from './ProgressBar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth } from 'firebase/auth'
import { collection, addDoc, doc, } from "firebase/firestore";
import { db } from '../Firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';



const userNameSchema = Yup.object().shape({
  userName: Yup.string()
  .min(5, 'password must be at least 5 characters!')
  .max(20, 'username must be under 20 characters')
  .required('Required')
  .matches(/^[a-z0-9_\.]+$/),
 
});
 

 const SignUp3 = ({navigation}) => {



///////    create a user/ user is added to the user collection   ////////// 
const handleSubmit = async (values)=> {
    // const docRef = doc(db,'users')
    // const theRef = user.uid;
     
      navigation.navigate("SignUp3");

}

// .then(async()=>{
//   await setDoc(docRef,{id:doc.id},{merge:true});
//   alert(error);
// }

// navigation.navigate("SignUp2")


  
 return (
  <KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.container}
  >
<TouchableWithoutFeedback onPress={() =>{
Keyboard.dismiss(); }}>  
          <View style={styles.container}>
              <SafeAreaView>
                <View style={{height:80, backgroundColor:"black", marginBottom:10, marginTop:50,marginRight:5, zIndex:1, alignItems:"center", }}>
                    <ProgressBar/>
                </View >

                
                  <View style={styles.formContainer} >
                  
                  <Formik
                    initialValues={{ 
                      userName: '',
                      
                    
                    }}
                    validationSchema={userNameSchema}
                    onSubmit={value => handleSubmit(value)}
                    >
                      {({ handleChange, handleBlur, setFieldTouched, handleSubmit, errors, touched, values }) => ( 
                          <View style={{ marginBottom:150, }}>
                          <Text style={styles.formTextTitles}>Username</Text>
                          <TextInput
                            onChangeText={handleChange('userName')}
                            value={values.userName}
                            onBlur={()=> setFieldTouched('userName')}
                            autoCapitalize={false}
                            // // placeholder={placeholder}
                            // placeholderTextColor={"white"}
                            selectionColor={'white'}
                            style={styles.textButton}
                            >
                          </TextInput>

                          {touched.userName && errors.userName && (<Text style={styles.errorMessage}>{errors.userName}</Text>)}

                        <View style={{minWidth:"90%",maxWidth:"90%",alignItems:'center',justifyContent:'center',}}>
                          <TouchableOpacity activeOpacity={.7} onPress={handleSubmit}>
                            <View style={styles.actionButton}>
                              <Text style= {styles.title} > Next</Text>
                            </View>
                          </TouchableOpacity>

                                <View style={{marginTop:30,}}>
                                  <Text style={{color:"white", fontSize:17, fontWeight:"600",}}>Usernames can only contain:</Text>
                                      <View style={{marginTop:10,}}>
                                        <Text style={styles.greyText}>  ✓ Lowercase Letters</Text>
                                        <Text style={styles.greyText}>  ✓ Numbers</Text>
                                        <Text style={styles.greyText}>  ✓ Underscores</Text>
                                        <Text style={styles.greyText}>  ✓ Dots</Text>
                                      </View>
                                </View> 

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

export default SignUp3

const styles = StyleSheet.create({

  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"black",
  },

  formTextTitles:{
      marginTop:5,
      
      color:"grey",
      fontSize:15,
      // flexDirection:"row",
     alignSelf:"flex-start",

  },

  greyText:{
    color:"white",
    fontSize:13,
    fontWeight:"500",
  },

  formContainer:{
      marginBottom:180,
      // backgroundColor:"yellow",
      height:"70%",
      minWidth:"90%",
      maxWidth:"90%",
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




// const UserNameSchema = Yup.object().shape({
  
//   userName: Yup.string()
//     .min(5, 'password must be at least 5 characters!')
//     .max(20, 'username must be under 20 characters')
//     .required('Required')
//     .matches(/^[a-z0-9_\.]+$/),
// });