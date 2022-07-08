import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import ProfileCard from './screens/ProfileCard';

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
       <View style={styles.box}>
         <Text style={{color:'white',}}>
           heloo
         </Text>
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
  }


})