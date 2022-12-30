import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ProfileCard from './ProfileCard';
import TextField from './button-etc/TextField';
import ActionButton from './button-etc/ActionButton';
import SecondaryButton from './button-etc/SecondaryButton';
import PencilButton from './button-etc/PencilButton';

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
       <View style={styles.box}>
         <Text style={{color:'white',}}>

         </Text>
          <TextInput
          placeholder='Search...'
          placeholderTextColor={'#3F3F40'}
          style={styles.text}
          />

          <TextField placeholder={"Email"}/>
          <TextField placeholder={"Password"}/>
          <ActionButton title= "Sign Up"/>
          <SecondaryButton title="Login"/>
         

       <ProfileCard/>
       </View>
        <PencilButton/>
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
    marginTop:60,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    height:500,
    width:350,
    backgroundColor:'#0E0E0E',
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
  }


});