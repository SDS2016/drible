import { StyleSheet, Text, View, useState,TextInput , TouchableOpacity,TouchableWithoutFeedback, 
  Keyboard, KeyboardAvoidingView, Platform} from 'react-native'
import ProgressBar from './ProgressBar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { db } from '../Firebase';
import { 
  updateDoc, 
  doc,
  collection,

} from 'firebase/firestore';
import MainNav from '../../MainNav'
import { Formik } from 'formik';
import * as Yup from 'yup';


const UserNameSchema = Yup.object().shape({
  
  userName: Yup.string()
    .min(5, 'password must be at least 5 characters!')
    .max(20, 'username must be under 20 characters')
    .required('Required')
    .matches(/^[a-z0-9_\.]+$/),
});
 
 

 const SignUp3 = ({navigation}) => {

  // const usersCollectionRef = collection(db, 'users');
/////  handleSubmit adds username field to users doc/ which an update crud function  navigate to MainNav//////////

const handleSubmit = async (values) => {
    
    // const userDoc = doc(db,"users",id);
    // const updateUserName = {userName: values.userName};
    await updateDoc(doc(db,"users",doc.id),{userName: values.userName});

    // return (<MainNav/>);
    
    (error) => {
      alert(error.message);
    };
    
  };

 
  
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
                    validationSchema={UserNameSchema}
                    onSubmit={value => handleSubmit(value)}
                    >
                      {({ handleChange, handleBlur, setFieldTouched, handleSubmit, errors, touched, values }) => ( 
                    
                    <View style={{ marginBottom:150,  }}>
                    
                    <Text style={styles.formTextTitles}>Username</Text>
                    <TextInput
                      onChangeText={handleChange('userName')}
                      value={values.userName}
                      onBlur={()=> setFieldTouched('userName')}
                      autoCapitalize={false}
                      // placeholder={placeholder}
                      // placeholderTextColor={"white"}
                      selectionColor={'white'}
                      style={styles.textButton}
                      ></TextInput>
                    
                    {touched.userName && errors.userName && (<Text style={styles.errorMessage}>{errors.userName}</Text>)}
                      
                    

                  <View style={{minWidth:"90%",maxWidth:"90%",alignItems:'center',justifyContent:'center',}}>
                    <TouchableOpacity activeOpacity={.7} onPress={handleSubmit(values)}>
                      <View style={styles.actionButton}>
                        <Text style= {styles.title} >Done</Text>
                      </View>
                    </TouchableOpacity>
                  
                          </View>
                          
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

greyText:{
  color:"white",
  fontSize:13,
  fontWeight:"500",
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