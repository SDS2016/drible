import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'


const InboxMessageComp = () => {
  return (
    <TouchableOpacity activeOpacity={.6}>
        <View style={styles.messagesContainer}>
            <View style={styles.dotContainer}> 
            
            </View>
                    <View style={styles.userTwoPic} >
                    <Image 
                        style={styles.img}
                        source={require("/Users/ericfreeman/Documents/drible/assets/player.png")} />
                    </View>
                <View style={styles.messageContainer}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                        <Text style={{color:'white',fontSize:14, marginLeft:2,fontWeight:'600',}}> Josh Durby</Text>
                        <Text style={{color:'white',fontSize:14,fontWeight:'600',}}>31m ago</Text>
                    
                    
                    </View>

                    <View>
                        <Text numberOfLines={1} style={{color:'grey', fontSize:13, marginLeft:4,paddingRight:70,}} >flex in react is column view by defaultugovgbkvghjmcvghjjnhbvgfcdxcfvgbhnjkm
                        </Text>
                    </View>
                    
                </View>
        </View>
        <View
              style={{
              marginTop: 2,
              //width:'80%',
              borderStartWidth:'100%',
              borderBottomColor: '#222222',
              borderBottomWidth: .4,
            }}
          />
      </TouchableOpacity>

    
  );
}

export default InboxMessageComp;

const styles = StyleSheet.create({
    
    messagesContainer:{
        
        height:70,
        flexDirection:'row',
        backgroundColor:'black',
        //marginLeft:10,
        marginRight:20,

    },

    dotContainer:{
        width:'3%',
        borderWidth:2,
       // borderColor:'white',
    },

    userTwoPic:{
        width:'20%',
       // borderColor:'white',
        borderWidth:3,
        justifyContent:'center',
        alignItems:'center',

    },

    img:{
        resizeMode:'cover',
        width:60,
        height:60,
        borderRadius:100,
    },


    messageContainer:{
        
        width:'75%',
       // borderColor:'white',
       // borderWidth:2,
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center',
    },




})