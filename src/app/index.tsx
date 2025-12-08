import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'




const Home = () => {

 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}></View>
      <View style={styles.footer}>
        <Text>From</Text>
        <Text>Meta</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:60
  },
  header: {
    backgroundColor:"red",
    height:40,
    width:40,
  },
  body:{
    backgroundColor:"green",
    height:40,
    width:40,
  },
  footer:{
    backgroundColor:"blue",
    height:40,
    width:40,
  }
})