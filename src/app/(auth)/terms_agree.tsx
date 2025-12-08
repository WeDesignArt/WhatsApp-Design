import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import imagePath from '@/src/constants/imagePath';

import ButtonComp from '@/src/components/atoms/ButtonComp';
import { router } from 'expo-router';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { Link } from 'expo-router';

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login")
  }
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.header} >
        <Image source={imagePath.logo_welcome} style={styles.logo_welcome} />
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Text style={styles.terms_text}>Read our <Link href={'/'}>Privacy Policy. </Link>Tap “Agree and continue” to
          accept the <Link href='/'>Teams of Service.</Link></Text>

        <View style={styles.lang_style}>
          <SimpleLineIcons name="globe" size={20} color="#008069" />
          <Text>English</Text>
          <Entypo name="chevron-down" size={20} color="#008069" />
        </View>

        <View style={{ width: moderateScale(300) }} >
          <ButtonComp title="Agree and Continue" onPress={onAgree} containerStyle={{ borderRadius: 50 }} />
        </View>
      </View>


      <View style={styles.footer} >
        <Text style={styles.from_text}>from</Text>
        <Image source={imagePath.logo_meta} style={styles.logo_meta_styles} />
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(50),
    paddingHorizontal: scale(20),
  },
  header: {
    alignItems: 'center',
    gap: verticalScale(20),
    marginTop:verticalScale(75),
  },

  welcome_text: {
    fontWeight: 700,
    fontSize: moderateScale(25),
    color: "black",
    marginBottom: verticalScale(10),
  },

  logo_welcome: {
    height: moderateScale(250),
    width: moderateScale(250),
    borderRadius: moderateScale(250),
  },

  terms_text: {

    textAlign: "center"

  },

  lang_style:{
    height: moderateScale(40),
    width: moderateScale(150),
    borderRadius: scale(55),
    backgroundColor:'#f2f5f7ff',
    flexDirection:"row",
    gap:scale(20),
    alignItems:'center',
    paddingHorizontal:moderateScale(20),
  },


  footer: {
    alignItems: 'center',
    display: "none",

  },

  from_text: {
    fontFamily: "",
    fontSize: moderateScale(12),
    color: '#867373'

  },
  logo_meta_styles: {
    width: scale(100),
    height: verticalScale(50),
  },

})

export default TermsAgree