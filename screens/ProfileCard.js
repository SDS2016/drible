import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileCard = () => {
  return (
    <View>
      <Text style={styles.profileCard}>ProfileCard</Text>
    </View>
  )
}

export default ProfileCard;

const styles = StyleSheet.create({
        profileCard:{
            color:'white',
        }

})