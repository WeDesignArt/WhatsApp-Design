import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MessageCard from './messageCard'
import imagePath from '@/src/constants/imagePath'

const Chats = () => {

  const data = [
    {
      image: imagePath.profile_picture,
      name: "Syed Umer Ali Hashmi",
      message: "Hello! How are you?",
      time: "Yesterday",
      count: "5",
    },
    {
      image: imagePath.profile_picture,
      name: "Ahmed Khan",
      message: "AsalamuAlaikum is product  available ?",
      time: "9:27 AM",
      count: "1",
    },
    {
      image: imagePath.profile_picture,
      name: "Junaid Akram",
      message: "Wait a minute! Who are you?",
      time: "6:11 PM",
      count: 0
    },

  ]
  return (
    <View style={styles.container} >
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard 
        image={item?.image} 
        name={item?.name} 
        message={item?.message} 
        time={item?.time} 
        count={item?.count} 
        />

      }} />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"white",
    marginTop:0,
    paddingTop:0,
    
  }
})

export default Chats