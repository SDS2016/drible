import React from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'


const Activity = () => {
  return (
  
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Activity</Text>
          <View
              style={{
              marginTop: 10,
              width:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
      </View>
  </SafeAreaView>
    </View>
  );
}

export default Activity;

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:'black',
    
  },
  
  title: {
    color:'white',
    paddingLeft: 20,
    fontSize:45,
    fontWeight:'bold',
    fontFamily:'Helvetica Neue',
  },
  
 
  
  
  
  
  
   
  
  




})