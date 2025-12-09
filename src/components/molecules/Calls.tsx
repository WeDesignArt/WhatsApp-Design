import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MessageCard from './messageCard'
import imagePath from '@/src/constants/imagePath'
import { moderateScale } from 'react-native-size-matters'
import Ionicons from '@expo/vector-icons/Ionicons'

const Calls = () => {
  const data = [
    {
      image: imagePath.profile_picture,
      name: "Syed Umer Ali Hashmi",
      message: "Hello! How are you?",
      // time: "Yesterday",
      // count: "5",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=11",
      name: "Ahmed Khan",
      message: "AsalamuAlaikum is product  available ?",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=14",
      name: "Junaid Akram",
      message: "Wait a minute! Who are you?",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=54",
      name: "Imran Khan Niazi",
      message: "Wait a minute! Who are you?",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=53",
      name: "Jehanzeb Aslam",
      message: "Wait a minute! Who are you?",
     icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=33",
      name: "Talha Ahmed",
      message: "Wait a minute! Who are you?",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },
    {
      image: "https://i.pravatar.cc/100?img=18",
      name: "Abdul Razzaq",
      message: "Wait a minute! Who are you?",
      icon: <Ionicons name="call-outline" size={24} color="black" />
    },

  ]
  return (
    <View style={styles.container} >
      <Text style={styles.text_recent}>Recent</Text>
      <FlatList data={data} renderItem={({ item }) => {
        return <MessageCard 
        image={item?.image} 
        name={item?.name} 
        message={item?.message}         
        icon={item?.icon} 
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
    
  },
  text_recent:{
    paddingHorizontal:moderateScale(10),
    fontSize:moderateScale(20),
  },
})

export default Calls