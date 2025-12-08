import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComp from '@/src/components/atoms/ButtonComp';
import AntDesign from '@expo/vector-icons/AntDesign';
import CountryPicker from 'react-native-country-picker-modal'
import { router } from 'expo-router';

const Login = () => {

  const [visible, setVisible] = useState(false)
  const [countryName, setCountryName] = useState('Pakistan')
  const [countryCode, setCountryCode] = useState('+92')

  const onNext = () => {
    router.push("/(auth)/verify_otp");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >

        <View style={styles.header_text}>

          <Text style={styles.phone_text}>Enter your phone number </Text>
          <Text style={styles.verify_text}>WhatsApp will need to verify your phone number. Carrier charges may apply. <Text style={styles.link}>What’s my number?</Text>  </Text>

        </View>


        <View style={styles.input_container}>
          <TouchableOpacity style={styles.dropDown_container} onPress={() => setVisible(true)} >

            <View />
            <Text style={styles.dropdown_title} >{countryName}</Text>
            <AntDesign name="caret-down" size={14} color="#075e54" />
          </TouchableOpacity>

          <View style={styles.horizontal_lines} />

          <View style={styles.country_input_container}>
            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>{countryCode}</Text>
              <TextInput style={styles.input} placeholder='Phone number' inputMode='numeric' />
            </View>
            <View style={styles.horizontal_lines} />
          </View>
        </View>
      </View>
      <View style={styles.footer} >
        <ButtonComp title="Next " containerStyle={{ borderRadius: 50, paddingHorizontal: scale(130), }} onPress={onNext} />
      </View>
      {
        visible && (
          <CountryPicker visible={visible} onClose={() => setVisible(false)} countryCode={'PK'} withFilter
           onSelect={(e: any) => {
            setCountryName(e.name);   
            setCountryCode(`+${e.callingCode[0]}`);   

          }} />
        )

      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: verticalScale(50),
    paddingBottom: verticalScale(20),
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: scale(20)

  },

  header: {

    gap: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center'


  },
  header_text: {
    gap: moderateScale(20),
  },

  phone_text: {
    textAlign: 'center',
    fontWeight: 500,
    fontSize: moderateScale(25),
    color: 'black'

  },
  verify_text: {
    fontWeight: 500,
    fontSize: moderateScale(13),
    color: 'black',
    textAlign: 'center'
  },



  link: {
    color: '#002AC0'
  },


  input_container: {


  },
  dropDown_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(7),
    paddingVertical: moderateScale(5),
  },
  dropdown_title: {},

  horizontal_lines: {
    backgroundColor: '#008069',
    width: moderateScale(250),
    height: verticalScale(0.8),
  },

  country_input_container: {
    paddingHorizontal: moderateScale(0),
    paddingVertical: moderateScale(5),

  },
  country_code: {
    paddingHorizontal: moderateScale(5),
    gap: verticalScale(50),
    flexDirection: "row",
    alignItems: "center",


  },
  country_code_text: {},
  input: {},


  footer: {
    justifyContent: "flex-end",

  },
})

export default Login