import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";

export interface StatusItem {
  name: string;
  img: string;      // user profile picture
  bg: string;       // background image for status
}

interface Props {
  data: StatusItem[];
  onPressStatus: (item: StatusItem) => void;
}

const StatusCarousel: React.FC<Props> = ({ data, onPressStatus }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
    >
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => onPressStatus(item)}
        >
          <ImageBackground
            source={{ uri: item.bg }}
            imageStyle={styles.cardImage}
            style={styles.cardContainer}
          >
            {/* Small profile circle */}
            <View style={styles.dpContainer}>
              <Image source={{ uri: item.img }} style={styles.dpImage} />
            </View>

            {/* Name at bottom-left */}
            <Text style={styles.name}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    // paddingHorizontal: moderateScale(10),
  },

  card: {
    marginRight: moderateScale(5),
  },

  cardContainer: {
    width: moderateScale(75),
    height: verticalScale(120),
    borderRadius: moderateScale(18),
    overflow: "hidden",
    padding: moderateScale(10),
    justifyContent: "flex-end",
    
  },

  cardImage: {
    borderRadius: moderateScale(18),
  },

  dpContainer: {
    position: "absolute",
    top: moderateScale(10),
    left: moderateScale(5),
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40),
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#25D366",
  },

  dpImage: {
    width: "100%",
    height: "100%",
  },

  name: {
    color: "#fff",
    fontSize: moderateScale(13),
    marginTop: moderateScale(10),
  },
});

export default StatusCarousel;
