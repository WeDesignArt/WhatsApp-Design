import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';


const Communities_Card = ({image, community_name, icon, name, chat, time }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container_button} >
        <View style={styles.communitiesChatContainer}>
          <View style={styles.imageContainer}>

            <Image
                        source={
                          typeof image === 'string'
                            ? { uri: image }   // agar string (URL) hai
                            : image           // agar require() ya local image hai
                        } style={{ height: "100%", borderRadius: moderateScale(10) }} />
          </View>

          <View style={styles.leftContainer} >
            <Text style={styles.communitiesText} >{community_name}</Text>
          </View>

        </View>


        <View style={styles.messageChatContainer}>


          <View style={styles.leftContainer} >
            <View style={styles.imageIconContainer}>
              {/* <MaterialCommunityIcons name="bullhorn" size={24} color="#075e54" /> */}
              {icon}

            </View>
            <View style={styles.textContainer}>

              <Text style={styles.messageName} >{name}</Text>
              <Text style={styles.messageChat} >{chat} </Text>
            </View>
          </View>

          <View style={styles.rightContainer} >
            <Text style={styles.messageTime} >{time}</Text>
            <Text style={styles.messagePoint} ></Text>
          </View>


        </View>

        <View style={styles.arrowChatContainer}>


          <View style={styles.arrowContainer} >
            <View style={styles.arrowIconContainer}>
              <AntDesign name="right" size={15} color="#8d8989ff" />

            </View>
            <View style={styles.textContainer}>

              <Text style={styles.arrowName} >View all</Text>

            </View>
          </View>




        </View>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    gap: verticalScale(5),
    paddingVertical: verticalScale(5),


  },

  container_button: {

  },

  communitiesChatContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(20),
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(15),
    backgroundColor: "#FFF",
    borderBottomColor: "#D5D6D8",
    borderBottomWidth: 0.4,
  },


  imageContainer: {
    height: verticalScale(45),
    width: moderateScale(50),

  },

  leftContainer: {
    flexDirection: "row",
    gap: scale(30),

  },
  messageChatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: scale(30),
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(15),
    backgroundColor: "#FFF",
  },

  textContainer: {
    gap: verticalScale(5),
  },
  messageName: {
    fontSize: scale(15),
  },

  messageChat: {
    color: "#8696A0",
  },

  rightContainer: {

  },

  messageTime: {
    color: "#8696A0",
  },

  messagePoint: {},


  messageText: {},
  imageIconContainer: {
    backgroundColor: "#D9FDD3",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(35),
    width: moderateScale(40),
    borderRadius: moderateScale(7),
  },

  communitiesText: {},

  arrowChatContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(15),
    paddingHorizontal: moderateScale(30),
  },

  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(40),
  },
  arrowIconContainer: {

  },
  arrowName: {
    fontSize: scale(17),
    color: "#8696A0",

  },










})

export default Communities_Card;