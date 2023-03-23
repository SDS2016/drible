import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'

const OtherSettingsCategories = ({title}) => {



  return (
    <TouchableOpacity
    activeOpacity={.7}
    >
      <View style={styles.container}>
                <View style={styles.textContainer}> 
                        <Text style={{fontSize:20,color:"white",fontWeight:"600",}}>{title}</Text>
                </View>
                            
                
                <View style={styles.arrowContainer}>
                <Image
                style={styles.img}
                source={require('../../assets/rightArrow.png')}
                />
                </View>
        </View>
    </TouchableOpacity>
  )
}

export default OtherSettingsCategories

const styles = StyleSheet.create({

    container:{
        height:50,
        minWidth:"100%",
        maxWidth:"100%",
        // borderBottomColor:"grey",
        // borderBottomWidth:.3,
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"pink",
    },

    textContainer:{
        margin:10,
        marginLeft:20,

        // alignSelf:"flex-start",
        justifyContent:"center",
    },


    img:{
        width:10,
        height:20,
    },

    arrowContainer:{
        // alignSelf:"flex-end",
        marginRight:15,
        justifyContent:"center",
    },


})