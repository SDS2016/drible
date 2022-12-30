import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'





const courts =[

{
    id:1,
    title:"Veterans Park",
    gps:"40.161820,-74.927850",
    image:"https://images.squarespace-cdn.com/content/v1/5a9dd1c24cde7acca5cda1e5/1611702891671-DDY1XV7WFBTAYPC1R04O/Photo+Jan+19%2C+3+04+32+PM.jpg?format=750w",
    light:"light",
    surface:"concrete",
    rim:"single rim",
    height:"10'",
    time:"10pm",


},

{
    id:2,
    title:"Fire Fighters Park",
    gps:"40.161820,-74.927850",
    image:"https://images.squarespace-cdn.com/content/v1/5a9dd1c24cde7acca5cda1e5/1611709092426-SIBUJOJ8X45GTD3NEIRV/Photo+Jan+14%2C+4+51+24+PM.jpg?format=750w",
    light:"light",
    surface:"rubber",
    rim:"double rim",
    height:"9'",
    time:"9pm",


},

{
    id:3,
    title:"Bucks County Recreational Center",
    gps:"40.161820,-74.927850",
    image:"https://sawebfilesprod001.blob.core.windows.net/images/Untitled%20design%20-%202021-03-01T164114.724.png?sv=2017-04-17&sr=b&si=DNNFileManagerPolicy&sig=F%2FCHJXjA8iHSSrojv3W7iXEM3ohKaSxAYCrYbTflB00%3D",
    light:"no light",
    surface:"concrete",
    rim:"single rim",
    height:"10'",
    time:"10pm",


},

{
    id:4,
    title:"Regional Athletic Center",
    gps:"40.161820,-74.927850",
    image:"https://letsgoball.blog/home/2018/12/22/top-5-outdoor-basketball-courts-in-redding-ca",
    light:"no light",
    surface:"concrete",
    rim:"single rim",
    height:"10'",
    time:"10pm",


},

{
    id:5,
    title:"Perennial Court",
    gps:"40.161820,-74.927850",
    image:"https://www.douglasvillega.gov/home/showpublishedimage/2510/637199534653630000",
    light:"light",
    surface:"concrete",
    rim:"single rim",
    height:"10'",
    time:"8pm",


},

{
    id:6,
    title:"Conestoga Valley",
    gps:"40.161820,-74.927850",
    image:"https://media.architecturaldigest.com/photos/61dc4c2321fc942b05f4f11a/master/w_2240%2Cc_limit/GettyImages-595290912.jpg",
    light:"light",
    surface:"concrete",
    rim:"single rim",
    height:"9'",
    time:"10pm",


},

]





const CourtData = () => {

const courtCards= ( {title,gps,image,light,surface,rim,height,time}  )=>{




}

const renderItem=({item})=>{


return 
}

 return (
    <View>
      <FlatList
        data={courts}
        renderItem={renderItem}
        keyExtractor={}
        horizontal={true}
      
      />
    </View>
  )
}

export default CourtData

const styles = StyleSheet.create({


})