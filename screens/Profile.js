import React  from 'react'

import { StyleSheet,useState , Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground,} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {  getStorage, ref,  uploadBytes, getDownloadURL } from "firebase/storage";
// import {v4} from "uuid";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
// import { storage } from './Firebase';
import { TextInput } from 'react-native-gesture-handler';
import ProfileCard from './ProfileCard';
import TextField from './button-etc/TextField';
import ActionButton from './button-etc/ActionButton';
import SecondaryButton from './button-etc/SecondaryButton';
import PencilButton from './button-etc/PencilButton';
import { useEffect } from 'react'
import { useRef } from 'react';






const Profile = ({navigation}) => {



  const [image, setImage] = React.useState('https://firebasestorage.googleapis.com/v0/b/drible-app.appspot.com/o/profile-image.png?alt=media&token=8d103c17-56ff-4824-8820-17e79a2fa2c7');


  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

    console.log(result);
    // //// the cancelled in result.canceled will is deprecated look up what to use to replace cancelled keyword /////
    if (!result.canceled) {
      const uploadUrl = await uploadImageAsync(result.assets[0].uri);
      setImage(uploadUrl);
    } 
     };
      
    
    // if (image == null) return;
      
      // make a function to update the the user doc, use the uploadUrl which is the downloadUrl which should be saved to the user doc ///
      // map the users collection by id then set it in the source for the background image //
    
    
    
      const uploadImageAsync = async (uri) => {
            // Why are we using XMLHttpRequest? See:
            // https://github.com/expo/expo/issues/2402#issuecomment-443726662
            const storage = getStorage();
            const blob = await new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.onload = function () {
                resolve(xhr.response);
              };
              xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
              };
              xhr.responseType = "blob";
              xhr.open("GET", uri, true);
              xhr.send(null);
            });

      try {
        const storageRef = ref(storage,`users/profile-pictures/IMG_${uuidv4().toUpperCase()}`);
        const result = await uploadBytes(storageRef,blob);

        blob.close();
        return await getDownloadURL(storageRef);
      } catch (error){
        alert(`Error:${error}`) 
      }
    }

    // create a function that saves the download url to the users profile img in their document

    //  then create a useEffect that gets the img asynchronously
    // const storage = getStorage();
    // const storageRef = ref(storage,`users/profile-pictures/IMG_${uuidv4().toUpperCase()}`);
    // const imgLink = getDownloadURL(storageRef);
  
  return (

    <View style={styles.container}>
      <SafeAreaView>
    <View style={styles.dotContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate("ProfileSettings")} >
        <Image
          style={styles.dots}
          source={require('/Users/ericfreeman/Documents/drible/assets/three-dots.png')}
        />
      </TouchableOpacity>
    </View>
        
            <ScrollView >
                
                    <Text  style={{fontSize:20, marginTop:20,marginBottom:10,color:'white', alignSelf:"center",}}>
                      kelvinwoodley
                    </Text>
              
            <View style={{ height:200, }}>
              <View style={styles.box}>
              <View style={styles.profilePicContainer}>    

             <ImageBackground

                        imageStyle={{
                          borderRadius:20,
                          borderWidth:4,
                          borderColor:"white",
                        }}
                        style={{
                          
                          height:"100%",
                          width:"100%",
                          flexDirection:"column-reverse",
                          justifyContent:"flex-start",
                          
                          
                        }}

                        
                        source={{ uri: image }}
                        // source={require('/Users/ericfreeman/Documents/drible/assets/player.png')}
                        >   


 {/* ///////////////////////// create a function that hide the upload image button if the user doesn't match current.User */}
                        <TouchableOpacity activeOpacity={.7}  onPress={pickImage}>
                              <View 
                                    style={{
                                      height:40,
                                      width:40,
                                      backgroundColor:"white",
                                      justifyContent:"center",
                                      alignItems:"center",
                                      borderRadius:10,
                                      marginLeft:15,
                                      marginBottom:15,
                                    }}>   
                                            
                                    <Image
                                     style={{
                                      height:30,
                                      width:30,
                                     }}
                                     source={require('/Users/ericfreeman/Documents/drible/assets/plus.png')}
                                    /> 
                                          
                              </View>
                              </TouchableOpacity>


                        </ImageBackground> 



                        <View
                          style={{
                            marginTop:20,
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                          }}
                        >
                          <View style={styles.followButton}><Text style={{color:"white",fontSize:"17", fontWeight:"600",}}>Follow</Text></View>
                          <View style={styles.messageButton}><Text style={{color:"white",fontSize:"17",fontWeight:"600",}}>Message</Text></View>
                        </View>



 {/* ///////////////////// profile bio ///////////////////////////// */}
                        <View
                          style={{
                            minHeight:40,
                            maxHeight:60,
                            width:"100%",
                            marginTop:20,
                            // backgroundColor:"green",
                          }}
                        
                        >
                          <Text
                            style={{
                              color:"white",
                              fontSize:15,
                              paddingLeft:10,
                              paddingRight:10,
                            }}
                          
                          > ;orem ipsum jsnjnaskjdvn nksjvnkajdvbn njvdasfv nojdvnbsdnfjsvnbjks sdbjnksjdnbs sdfibnskjdbfn dnlbsjndfbns ksjnbdfjksbnk</Text>
                        </View>

                        </View>
                  
              </View>
            </View>
          </ScrollView>
       
  </SafeAreaView>
  
    </View>
);
}

                          
export default Profile;

const styles = StyleSheet.create({
  
    container:{
    flex: 1, 
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    
  },
  

  box:{
    
    // justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    height:500,
    width:350,
    backgroundColor:'#0E0E0E',
  },

  profilePicContainer:{
    height:300,
    width:300,
    // borderWidth:10,
    // borderRadius:10,
    marginTop:25,
    borderColor:"white",

  },

  text:{
    fontSize:18,
    color:'white',
    marginLeft:2,
    paddingLeft:13,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:17,
    margin:10,
    backgroundColor:'black',
    borderColor:'white',
  },


  dotContainer:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:"flex-end",
    

  },

  dots:{
    height:8,
    width:35,
    margin:8,

  },

  followButton:{
    height:35,
    width:"45%",
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10,
    backgroundColor:"#FF2035",
    justifyContent:"center",
    alignItems:"center",
  },

  messageButton:{
    height:35,
    width:"45%",
    paddingLeft:20,
    paddingRight:20,
    borderRadius:10,
    backgroundColor:"grey",
    justifyContent:"center",
    alignItems:"center",
  },
});