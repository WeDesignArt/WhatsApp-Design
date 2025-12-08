import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import imagePath from '@/src/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';


const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
   
    let navigate_to_welcome = (()=>{
      router.push("/(auth)/terms_agree");
    })

   
   let loading_timeout = (()=>{
    setIsLoading(true);
    setTimeout(navigate_to_welcome,2000);
   })
   
useEffect(() => {
  const timeout = setTimeout(loading_timeout,3000);

  return() => {
    clearTimeout(timeout)
  }
 }, []);

  return (

    <View style={styles.container}>
    <View style={styles.header}></View>
    <View style={styles.body}>
      <Image source={imagePath.logo_whatsapp} style={styles.logo_whatsapp_styles} resizeMode='contain'/>
    </View>
    <View style={styles.footer}>
      {
        isLoading? (
          <>
          <ActivityIndicator size={moderateScale(30)} color={"#0CCC83"}  />
           <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (

      <>
      <Text style={styles.from_text}>from</Text>
      <Image source={imagePath.logo_meta} style={styles.logo_meta_styles} />
      </>
        )
      }

    </View>
    </View>

  
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(20)
  },
  header:{},

  body:{
    
  },
    logo_whatsapp_styles:{
      width: moderateScale(80),
      height: moderateScale(80),      
      borderRadius: moderateScale(10),
    },
    
   
  footer:{
    
    alignItems:'center',
    height:verticalScale(60)
    
  },
  from_text :{
    fontFamily:"",
    fontSize: moderateScale(12),
    color:'#595959'
    
  },
   logo_meta_styles:{
      width: scale(100),
      height: verticalScale(50),
    },
  
  
  loader_styles:{
    color:'#0CCC83',
    width:moderateScale(50),
  },
  loading_text:{
    fontSize:moderateScale(15),
    marginTop:moderateScale(10),
    justifyContent:'flex-end'
  },

})
export default Auth