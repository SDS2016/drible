import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgressBar = () => {
  return (



    <View style={styles.container}>
        <SafeAreaView>
      <View style={styles.innerContainer}>
            <View style={styles.circle1}>
                <Text style={styles.numberStyle}>1</Text>
            </View>
        
        {/* {////////////////////////  dashed line  //////////////////////////} */}
            <View 
            style={{ 
                // height:3,
                width:"10%",
                margin:7,
                borderRadius:80,
                borderBottomWidth:5,
                borderBottomColor: 'grey',
                borderBottomStyle:"dashed",
                
                // borderColor:"grey",
                
                
            }}>
            </View>

        {/* {//////////////////////////////////////////////////////////////////} */}
            <View style={styles.circle2}>
                <Text style={styles.numberStyle}>2</Text>
            </View>

        {/* {////////////////////////  dashed line  //////////////////////////} */}
            <View 
            style={{ 
                width:"10%",
                margin:6,
                borderRadius:80,
                borderBottomWidth:5,
                borderBottomColor: 'grey',
                borderBottomStyle:"dashed",
            }}>
            </View>



        {/* {//////////////////////////////////////////////////////////////////} */}



            <View style={styles.circle3}>
                <Text style={styles.numberStyle}>3</Text>
            </View>
      </View>
      </SafeAreaView>
    </View>



  )
}

export default ProgressBar

const styles = StyleSheet.create({


    container:{
        height:80,
        width:"90%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"green",
    },



    innerContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },


    numberStyle:{
        fontSize:35,
        color:"black",
        fontWeight:"600",
       

    },


    circle1:{
        height:60,
        width:60,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FF2035",

    },

    circle2:{
        height:60,
        width:60,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#383838",
    },

    circle3:{
        height:60,
        width:60,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#383838",
    },


})