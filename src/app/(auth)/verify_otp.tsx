import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonComp from '@/src/components/atoms/ButtonComp';
import { OtpInput } from "react-native-otp-entry";
import { router } from 'expo-router';
import { storage } from '@/src/utils/utils';


const VerifyOtp  = () => {

 
  const [otp, setOtp] = useState("");

  // const onPress = () => {
  //   storage.set("access_token", "11232sdsagasgasda21")
  // }

  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.header} >

        <View style={styles.header_text}>
          <Text style={styles.phone_text}>Verifying your number</Text>
          <Text style={styles.verify_text}>
            Waiting to automatically detect 6-digit code sent by SMS to +92 _ _ _ _ _
            <Text style={styles.link}>  Wrong number?</Text>
          </Text>
        </View>

        <View style={styles.input_container}>
          
          {/*  OTP center & small width */}
          <View style={styles.otpWrapper}>
            <OtpInput
              numberOfDigits={6}
              
              focusColor="green"
              hideStick={true}
              placeholder="------"
              onTextChange={(text) => setOtp(text)}               
              
              theme={{
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinText,
              }}
            />
          </View>

          <View style={styles.horizontal_lines} />

        </View>
              <View style={styles.codelink}>
                <Text style={styles.codelink_text} >Didn't receive code?</Text>
              </View>

      </View>


  
  <View style={styles.footer}>
    <ButtonComp
      title="Verify"
      containerStyle={{ borderRadius: 50, paddingHorizontal: scale(130) }}
      // onPress={onNext}
    />
  </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  // --- OTP Box Style ---
  pinCodeContainer: {
    width: scale(32),
    height: scale(45),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 4,
  },

  filledPinCodeContainer: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "white",
  },

  pinText: {
    fontSize: moderateScale(18),
    color: "black",
    fontWeight: "600",
  },

  // --- OTP Wrapper (center fix) ---
  otpWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    marginVertical: 10,
  },

  // --- Screen Styles ---
  main_container: {
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
    fontWeight: '500',
    fontSize: moderateScale(25),
    color: 'black'
  },

  verify_text: {
    fontWeight: '500',
    fontSize: moderateScale(13),
    color: 'black',
    textAlign: 'center'
  },

  link: {
    color: '#002AC0'
  },

  horizontal_lines: {
    backgroundColor: '#AAAAAA',
    width: moderateScale(150),
    height: verticalScale(2),
    alignSelf: "center"
  },
  input_container:{},
  codelink:{},
  codelink_text:{
    color:'#075e54',
  },

  
  footer: {
    justifyContent: "flex-end",

  },

})

export default VerifyOtp
