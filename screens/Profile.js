import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import ProfileCard from './ProfileCard';

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
       <View style={styles.box}>
         <Text style={{color:'white',}}>
           heloo
         </Text>
          <TextInput
          selectionColor={'white'}
          placeholder='Search...'
          placeholderTextColor={'#3F3F40'}

          style={styles.text}
          />
       <ProfileCard/>
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