import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ButtonComp = ({title, onPress, containerStyle, textstyle } : any) => {
  return (

    <TouchableOpacity style={[styles.button_container,containerStyle]} activeOpacity={0.8} onPress={onPress}>
      <Text style={[styles.button_text, textstyle]} >{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

 button_container:{
  backgroundColor:'#075e54',
  width:'100%',
  paddingVertical: verticalScale(10),
  paddingHorizontal:scale(50),
  borderRadius: moderateScale(4),
  alignItems:'center'
 },

button_text:{
 color:'white',
},

})
export default ButtonComp