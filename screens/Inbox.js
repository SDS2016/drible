import React from 'react'
import { StyleSheet, 
  Text, View, SafeAreaView,  
  TextInput,Keyboard, TouchableOpacity, 
  TouchableWithoutFeedback, Image} from 'react-native'




const Inbox = () => {
  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();

    }}>
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleBox}>
          <Text style={styles.title}>Inbox</Text>
          <View
              style={{
              marginTop: 5,
              width:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
      </View>

      
        <View style={styles.searchBox}> 
        <TouchableOpacity>
        <Image
          style={{marginLeft:14, height:20, width:20, tintColor:'#3F3F40',}}
          source={require('./../assets/search-icon.png')}
        />
        </TouchableOpacity>
            <TextInput 
            placeholder='Search...'
            placeholderTextColor={'#3F3F40'}
            style={styles.search}
            
            />
        </View>
        
        <View
              style={{
              marginTop: 2,
              width:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
          
      </SafeAreaView>
    </View>
    </TouchableWithoutFeedback>
  );
}

export default Inbox;

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

search:{
    fontSize:18,
    color:'white',
    flex:1,
    marginLeft:2,
    paddingLeft:13,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:17,
    margin:10,
    //width:'100%',
    
    
   
},

searchBox:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 12,
  margin: 10,
  backgroundColor:'#1A1A1A',
  borderColor:'#1A1A1A',
  borderColor:'#1A1A1A',

}






 




})