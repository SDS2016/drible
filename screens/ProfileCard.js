import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View style={styles.back}>
      <Text style={styles.profileCard}>ProfileCard</Text>
    </View>
  )
}

export default ProfileCard;

const styles = StyleSheet.create({
        profileCard:{
            color:'white',
        },
       

})