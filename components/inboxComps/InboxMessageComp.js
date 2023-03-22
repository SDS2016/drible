import {  useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native'


const InboxMessageComp = () => {

        const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={.6} onPress={()=> navigation.navigate("ChatScreen")}>
        <View style={styles.messagesContainer}>
            {/* <View style={styles.dotContainer}> 
            
            </View> */}
                <View style={styles.userTwoPic} >
                    <Image 
                        style={styles.img}
                        source={require("/Users/ericfreeman/Documents/drible/assets/player.png")} />
                </View>

                <View style={styles.messageContainer}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between',}}>
                        <Text style={{color:'white',fontSize:14, marginLeft:2,fontWeight:'600',}}> Josh Durby</Text>
                        {/* <Text style={{color:'white',fontSize:14,fontWeight:'600',}}></Text> */}
                    
                    
                </View>

                    <View style={{flexDirection:'row',}}>
                        <Text 
                            numberOfLines={2} 
                            style={{
                            color:'grey',
                            width:"80%", 
                            fontSize:13, 
                            marginLeft:4,
                            // paddingRight:87,
                            // backgroundColor:"green"
                            }} >flex in react is column view by fkfgvhghjvg h gh gh hgvcgvjbhjbgjvhgjgy ggvkjhvg vkjhbuv

                          
                        </Text> 
                        <View
                        style={{
                            color:'grey',
                            width:"20%", 
                            fontSize:13, 
                            marginLeft:4,
                            // paddingRight:87,
                            backgroundColor:"green"
                            }}
                        >
                        <Text style={{
                            color:'white',
                            fontSize:13, 
                            // paddingRight:87,
                            // backgroundColor:"green"
                            }}>o</Text>
                        </View> 
                        
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"flex-end",marginTop:5,}}>
                        <Text style={{color:"grey",marginRight:10,}}>Seen</Text><Text style={{color:"grey",}}>31m</Text>
                    </View>
                </View>
        </View>
        
      </TouchableOpacity>

    
  );
}

export default InboxMessageComp;

const styles = StyleSheet.create({
    
    messagesContainer:{
        
        height:70,
        flexDirection:'row',
        // 
        
        //marginLeft:10,
        marginRight:20,
        borderBottomColor:"grey",
        
        

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
        paddingTop:20,
        width:'75%',
    //    borderColor:'red',
       // borderWidth:2,
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center',
    },




})