
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'


const MessageCard = ({image, name, message, time, count}:any) => {
  return (
    
   <View style={styles.cardContainer}>
     <TouchableOpacity style={styles.button} activeOpacity={0.8}>
         <View style={styles.leftContainer} >
      <Image source={image} style={styles.image} />
         <View style={styles.textContainer} >
             <Text style={styles.name} >{name}</Text>
             <Text style={styles.message} >{message}</Text>
         </View>
         </View>

            <View style={styles.rightContainer} >
                <Text style={styles.time} >{time}</Text>
                {/* <Text style={styles.} ></Text> */}
                {!!count && (
                 <View style={styles.messageCountContainer} >
                <Text style={styles.messageCount} >{count}</Text>
                </View>
                )}
                

            </View>


     </TouchableOpacity>
     </View>
   
    
  )
}


const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
    // marginTop:100

  },


 button:{
  
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  paddingHorizontal:moderateScale(12),
  paddingVertical: verticalScale(15)

 },

 leftContainer:{
  flexDirection:"row",
  alignItems:"center",
  gap: scale(10),
 },


        image:{
         width:moderateScale(45),
         height:moderateScale(45),
         borderRadius:moderateScale(45),
         objectFit:"cover",
        },
        textContainer:{
          gap:verticalScale(5)

        },
        name:{
         fontWeight:'bold',
         fontSize:moderateScale(14),
        },
        message:{
          fontWeight:"400",
         fontSize:moderateScale(13),
         color:'#889095'
        },

            // 

 rightContainer:{
  alignItems:"flex-end",
  gap:verticalScale(5)
 },
         time:{
          fontWeight:"400",
          fontSize:moderateScale(12),
          color:'#889095'
         },
         messageCountContainer:{
          backgroundColor:"#23b769",
          width:moderateScale(22),
          height:moderateScale(22),
          borderRadius:moderateScale(22),
          alignItems:"center",
          justifyContent:"center",
         },
         messageCount:{
          color:"white",

           fontWeight:"400",
          fontSize:moderateScale(12),

 },
})
export default MessageCard