import { StyleSheet, Text, View } from 'react-native'
import BottomSheet from "@gorhom/bottom-sheet";
import React from 'react'

const BottomSheetTemp = ({children}) => {

    const bottomSheetRef = useRef(null);
  
    const snapPoints = useMemo(() => ['1%', '80%'], []);


  return (
    <BottomSheet
    ref={ref}
    index={1}
    snapPoints={snapPoints}
    handleStyle={{
    backgroundColor:'black',
    borderTopStartRadius:15,
    borderTopEndRadius:15,  
  }}

  handleIndicatorStyle={{
  width:70,
  backgroundColor:'grey'
  }}
  >
    {children}
  </BottomSheet>
  )
}

export default BottomSheetTemp

const styles = StyleSheet.create({})