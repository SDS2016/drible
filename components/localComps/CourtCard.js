import { StyleSheet, Text, View,Image,  TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'




const CourtCard = ( {...props}) => {

     const {name,
            coordinate,
            image,
            rim,
            close,
            light,
            surface,
            height,} = props

            const navigation = useNavigation();

  return (
    <TouchableOpacity
    activeOpacity={.9}
    onPress={()=> navigation.navigate("CourtCardsScreen")}
     >
    <View style={styles.cardContainer}
    >
    
      <Image
       
       style={styles.image}
       source={image}
      />
    
        <View style={styles.courtNameContainer}>
            <Text style={{fontSize:23, fontWeight:"500", color:"white",}}>{name}</Text>
        </View>

        <View style={styles.iconsContainer}>
                
                <View style={{flexDirection:"row", }}>
                        
                        <View style={styles.iconImageContainer}>
                            
                            <Image 
                            style={styles.rimImage}
                            source={require('../../assets/rim.png')}
                            
                            />
                             <View>
                                <Text style={styles.text}>{rim}</Text>
                           </View>
                        </View>

                        <View style={styles.iconImageContainer}>
                            <Image 
                            style={styles.surfaceImage}
                            source={require('../../assets/surface.png')}
                            
                            />
                            <View>
                                <Text style={styles.text}>{surface}</Text>
                            </View>
                        </View>

                        <View style={styles.iconImageContainer}>
                            <Image 
                            style={styles.lightImage}
                            source={require('../../assets/light.png')}
                            
                            />
                            <View>
                                <Text style={styles.text}>{light}</Text>
                            </View>
                        </View>

                        <View style={styles.iconImageContainer}>
                            <View style={{flexDirection:"row",}}>
                                <Text style={{justifyContent:"center",alignSelf:"center", fontSize:20, fontWeight:"600",color:"white",marginRight:3,}}>{height}</Text>
                                <Image 
                                    style={{height:25, width:10,}}
                                    source={require('../../assets/rim-height.png')}
                                    
                                    />
                            </View>

                            <View>
                                <Text style={styles.text}>Rim Height</Text>
                            </View>
                        </View>




                </View>
            
                    <View 
                        style={{ 
                            alignItems:"flex-end",
                            justifyContent:"center",
                            }}>
                        <Text style={{fontSize:19, padding:1,fontWeight:"600", color:"white",}}>{close}</Text>
                        <Text style={styles.text}>Close</Text>
                    </View>
            
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default CourtCard

const styles = StyleSheet.create({

    cardContainer:{
        
        paddingLeft:13,
        marginRight:6,
        // backgroundColor:"green",
    },

    image:{
        height:200,
        width:350,
        borderRadius:15,
        
    },

    iconsContainer:{
        marginTop:3,
        justifyContent:"space-between",
        flexDirection:"row",
        // backgroundColor:"orange",
    },

    iconImageContainer:{
        marginRight:10,
        padding:6,
        alignItems:"center",
        justifyContent:"center",
        // backgroundColor:"yellow",
    },

    lightImage:{
        height:25,
        width:25,
        resizeMode:"contain",
    },



    rimImage:{
        height:25,
        width:29,
        resizeMode:"contain",
    },

    surfaceImage:{
        height:25,
        width:35,
        resizeMode:"contain",
    },
    
    textContainer:{
        flexDirection:"row",
    },

    text:{
        fontSize:8,
        color:"white",
    },

    courtNameContainer:{
        padding:5,
        borderBottomWidth:.3,
        borderBottomColor:"white",
        flexDirection:"row",
    },

   



})