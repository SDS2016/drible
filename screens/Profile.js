import React  from 'react'

import { StyleSheet,useState , Image, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground,} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {  storageRef, storage, getStorage, ref,  uploadBytes, getDownloadURL, uploadString, getMetadata,} from "firebase/storage";
import {v4} from "uuid";
// import { storage } from './Firebase';
import { TextInput } from 'react-native-gesture-handler';
import ProfileCard from './ProfileCard';
import TextField from './button-etc/TextField';
import ActionButton from './button-etc/ActionButton';
import SecondaryButton from './button-etc/SecondaryButton';
import PencilButton from './button-etc/PencilButton';
import { useEffect } from 'react'
import { async } from '@firebase/util';





const Profile = ({navigation}) => {


  // useEffect(() => {
  //     navigation.setOptions({tabBarStyle: {display:'none'}});
  
  //     // return()=>{
  //     //   navigation.getParent().setOptions({tabBarStyle: {display:'flex'}})
  //     // };
  //   }, [])


  const [image, setImage] = React.useState(null);

  // const storage = getStorage(); 
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });

    // console.log(result);

    
    
    // //// the cancelled in result.canceled will is deprecated look up what to use to replace cancelled keyword /////
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      
      

      if (image == null) return;
      const storage = getStorage();
      // // // const IMG = 'IMG';
      // // // const oldName = IMG.concat(v4().toUpperCase() + image.toUpperCase());
      // // // const fileName = oldName.sub string(oldName.lastIndexOf('/')+1);
     
      // // const newFilename = `IMG`+ v4() + image;
      // const latestFileName = getPictureBlob(image);
      const storageRef = ref(storage,`profiles/images/IMG_${ v4().toUpperCase()}`);
      
       uploadBytes(storageRef,image).then((snapshot) => {
            alert('image uploaded');
            console.log(image);
            
          });

      //  try {
      //     const storage = getStorage();
      //     const response = await fetch(result.assets[0].uri);
      //     const newFilename = response.blob();
      
      //     const reference = ref(storage, `profiles/images`)
      //     const result = await uploadBytes(reference, newFilename)
      //     const url = await getDownloadURL(result.ref)
      //     alert('image uploaded')
      //     console.log(image)
      //     return url
      //   } catch (err) {
      //     return Promise.reject(err)
          
      // }


    }


    const getPictureBlob = (image) => {
      // https://github.com/expo/expo/issues/2402#issuecomment-443726662
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image, true);
        xhr.send(null);
      });
    };





    // const handleUpload = async () => {
    //   let blob;
    //   try {
    //     blob = await getPictureBlob(image);
    
    //     const ref = await storage.ref().child(v4());
    //     const snapshot = await ref.put(blob);
    
    //     return await snapshot.ref.getDownloadURL();
    //   } catch (e) {
    //     alert(e.message);
    //   } finally {
    //     blob.close();
       
    //   }

    // }

    
       


  //   }
  //   uploadImage();
    // //////////////////////////////////////////
  
//   const storage = getStorage();
//   // const storageRef = ref(storage, `users/profile-photos/`);

//   const storageRef = ref(storage, `users/profile-photos/${image+ v4()}`);
// //  const filename = {result.uri};
    
      
//       // const filename = image.substring(image.lastIndexof('/')+1);
//       // const imagUri = storage().ref(filename).putFile(image);
//       // const ref = firebase.storage().ref().child(filename).put(blob);

//   uploadBytes(storageRef,image).then((Snapshot) => {
//     alert('image uploaded');
//     console.log(image);
//   });

  // const storage = getStorage();
  };


  

  // ////////////////// upload image to cloud storage ///////////////////

// useEffect(() => {
 
// }, [image])


  





  
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