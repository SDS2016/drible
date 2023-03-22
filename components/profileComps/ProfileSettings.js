import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import SettingsCategories from './SettingsCategories';
import OtherSettingsCategories from './OtherSettingsCategories';
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import{useEffect} from "react";
import { useNavigation } from '@react-navigation/native';



const ProfileSettings = () => {


    // useEffect(() => {
    //     navigation.getParent().setOptions({tabBarStyle: {display:'none'}});
    
    //     // return()=>{
    //     //   navigation.getParent().setOptions({tabBarStyle: {display:'flex'}})
    //     // };
    //   }, [])

const navigation = useNavigation();


const handleSignOut =() => {
    const auth = getAuth();
    signOut(auth)
    .then(() => {
        navigation.replace('Home')

    }).catch((error) => {
    alert(error.message)
});




}





  return (
    

<View style={styles.container}>
<View style={{marginTop:16,}}>
<View style={{backgroundColor:"#242424", margin:16,borderRadius:18,}}>
    
    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <SettingsCategories title={"Username"} />
    </View>

    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <SettingsCategories title={"Email"}/>
    </View>
    <SettingsCategories title={"Phone"}/>
    
</View>    

<View style={{backgroundColor:"#242424",margin:16,borderRadius:18,}}>
    
    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <SettingsCategories title={"Location"} />
    </View>

    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <SettingsCategories title={"Notification"}/>
    </View>
    <SettingsCategories title={"Contacts"}/>
    
</View>   

<View style={{backgroundColor:"#242424",margin:16,borderRadius:18,}}>
    
    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <OtherSettingsCategories title={"Support"} />
    </View>

    <View style={{ borderBottomColor:"#393939", borderBottomWidth:.2,}}>
    <OtherSettingsCategories title={"Terms of Service"}/>
    </View>
    <OtherSettingsCategories title={"Privacy Policy"}/>
    
</View>   
</View>

    <TouchableOpacity activeOpacity={.7} onPress={handleSignOut} >
        <View style={styles.actionButton} >
        <Text style= {styles.title}>Log out</Text>
        </View>
    </TouchableOpacity>
</View>

  )
}

export default ProfileSettings

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        // justifyContent:"center",
        backgroundColor:"black",

    },

    title:{
        fontSize:18,
        fontWeight:"600",
    },

    actionButton:{
        flexDirection:'row',
        width:90,
        alignItems:'center',
        justifyContent:'center',
        padding:9,
        margin:5,
        marginTop:5,
        backgroundColor:'#FF2035',
        borderRadius: 8,
        
        //borderWidth:10,
    },

})