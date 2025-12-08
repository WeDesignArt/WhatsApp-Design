import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import MessageCard from './messageCard'

const Updates = () => {

  const data = [
   {
         image: "https://i.pravatar.cc/100?img=31",
         name: "Circle of Life",
         message: "Hello! How are you?",
         time: "Yesterday",
         count: "522",
       },
       {
         image: "https://i.pravatar.cc/100?img=67",
         name: "AI Revolution",
         message: "AsalamuAlaikum is product  available ?",
         time: "9:27 AM",
         count: "87",
       },
       {
         image: "https://i.pravatar.cc/100?img=28",
         name: "Netflix",
         message: "Wait a minute! Who are you?",
         time: "6:11 PM",
         count: "39"
       },
       {
         image: "https://i.pravatar.cc/100?img=21",
         name: "The New York Times",
         message: "We are Venom!",
         time: "8:11 PM",
         count: 0
       },
       {
         image: "https://i.pravatar.cc/100?img=33",
         name: "Opportunities Corner",
         message: "We are Venom!",
         time: "8:11 PM",
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
  }
})

export default Updates