import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Calls = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>Calls</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:"yellow",

 }
})

export default Calls