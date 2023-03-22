import { StyleSheet, Text, View ,Switch, useState, TouchableOpacity} from 'react-native'
import React from 'react'

const SettingsCategories = ({title}) => {

    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <TouchableOpacity
    activeOpacity={.7}
    >
      <View style={styles.container}>
                <View style={styles.textContainer}> 
                        <Text style={{fontSize:20,color:"white",fontWeight:"600",}}>{title}</Text>
                </View>
                            
                
                <View style={styles.switchContainer}>
                <Switch
                    trackColor={{false: '#00000', true: '#FF2035'}}
                    thumbColor={isEnabled ? '#ffff' : '#ffffff'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                </View>
        </View>
    </TouchableOpacity>
  )
}

export default SettingsCategories

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

    switchContainer:{
        // alignSelf:"flex-end",
        marginRight:15,
        justifyContent:"center",
    },


})