import { StyleSheet, Text, View } from 'react-native'
import BottomSheetTemp from '../../screens/button-etc/BottomSheetTemp'
import React, {useRef, useMemo} from 'react'

const FriendsListInvite = () => {

    // const bottomSheetRef = useRef(null);
  
    // const snapPoints = useMemo(() => ['1%', '80%'], []);


  return (
    <View style={styles.container}>
    {/* <BottomSheetTemp
    ref={bottomSheetRef}
    snapPoints={snapPoints}
    >

    </BottomSheetTemp> */}
    </View>
  )
}

export default FriendsListInvite

const styles = StyleSheet.create({

    container:{
        flex:1,
        minHeight:"60%",
        maxHeight:"60%",
        alignItems:'center',
        backgroundColor:'black',
    },



})