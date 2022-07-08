import React, { useRef } from "react";
import { View, Button, Text} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";


export default function Local() {

  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
      }}
    >
      <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={300}
        openDuration={250}
        customStyles={{
          wrapper: {
           
            marginBottom: 100,
            backgroundColor: "transparent"
          },
          draggableIcon: {
            
            backgroundColor: "#000"
          },
          

        }}
      >
        <Text>
          hello
        </Text>
      </RBSheet>
    </View>
  );
}