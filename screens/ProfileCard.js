import { StyleSheet, Text, View,ImageBackground } from 'react-native'

import React from 'react'

const ProfileCard = (navigation) => {

  // useEffect(() => {
  //   navigation.getParent().setOptions({tabBarStyle: {display:'none'}})

  //   return()=>{
  //     navigation.getParent().setOptions({tabBarStyle: {display:'flex'}})
  //   };
  // }, [])

  return (
    <View style={styles.container}>
       <View style={styles.profilePicContainer}>    

                      <ImageBackground
                       style={{
                        height:"100%",
                        width:"100%",
                        resizeMode: 'cover',
                        borderWidth:5,
                        borderRadius:20,
                        borderColor:"white",

                       }}
                       source={require('../assets/player.png')}
                      >    
                            <View>   
                                    <View> 
                                    {/* <Image/>  */}
                                    </View>
                            </View>
                      </ImageBackground>

                  </View>
    
    </View>
  )
}

export default ProfileCard;

const styles = StyleSheet.create({
        container:{
           height:100,

        },
       

})