import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Chats from '@/src/components/molecules/Chats'
import Calls from '@/src/components/molecules/Calls'
import Communities from '@/src/components/molecules/Communities'
import Updates from '@/src/components/molecules/Updates'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import IconGroup from '@/src/assets/icons/icon-group.svg';
import IconUpdates from '@/src/assets/icons/icon-updates.svg';
import IconCalls from '@/src/assets/icons/icon-phone.svg';
import IconChats from '@/src/assets/icons/icon-chats.svg';
import StatusCarousel, { StatusItem } from '@/src/components/atoms/statusCard'
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Main = () => {
 const statusData: StatusItem[] = [
  { name: "Umer", img: "https://i.pravatar.cc/100?img=1", bg: "https://picsum.photos/400/300", },
  { name: "Ali", img: "https://i.pravatar.cc/100?img=2", bg: "https://picsum.photos/600/300", },
  { name: "Hamza", img: "https://i.pravatar.cc/100?img=3",bg: "https://picsum.photos/300/300", },
  { name: "Sara", img: "https://i.pravatar.cc/100?img=4",bg: "https://picsum.photos/500/300", },
  { name: "Alex", img: "https://i.pravatar.cc/100?img=7",bg: "https://picsum.photos/900/300", },
  { name: "Simon", img: "https://i.pravatar.cc/100?img=12",bg: "https://picsum.photos/900/400", },
];

  const [currentPage, setCurrentPage] = useState("chats")

  const ActivePage = () => {
    switch (currentPage) {

      case "chats":
        return <Chats />;

      case "updates":
        return <Updates />;

      case "communities":
        return <Communities />;

      case "calls":
        return <Calls />;

      default:
        return <Chats />

    }
  }

  const getHeaderTitle = () => {
    switch (currentPage) {
      case "chats":
        return "WhatsApp";
      case "updates":
        return "Updates";
      case "communities":
        return "Communities";
      case "calls":
        return "Calls";
      default:
        return <Chats />;
    }
  };

  const getHeaderIcon = () => {
    switch (currentPage) {
      case "chats":
        return <Ionicons name="camera-outline" size={24} color="black" />;
      case "updates":
        return <Ionicons name="search-sharp" size={24} color="#000" />;
      case "communities":
        return <Ionicons name="search-sharp" size={24} color="#000" />;
      case "calls":
        return <Ionicons name="search-sharp" size={24} color="#000" />;
      default:
        return <Ionicons name="camera-outline" size={24} color="black" />
    }
  }

  const getHeaderSettingDots = () => {
    switch (currentPage) {
      case "chats":
        return <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />;
      case "updates":
        return <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />;
      case "communities":
        return <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />;
      case "calls":
        return <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />;
      default:
        return <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />;
    }
  }

  const getUpdateSetting = () => {
    switch (currentPage){
      case "chats":
        return <View style={styles.searchBarContainer} >
          <Ionicons name="search-sharp" size={24} color="#8d8989ff" />
          <TextInput style={styles.topBarSearchBar} placeholder='Ask Meta AI or Search' placeholderTextColor="#595959" cursorColor={"#23b769"}></TextInput>

        </View>

      case "updates":
        return <View style={styles.statusBarContainer} >
          
          <Text style={styles.statusBarText}> Status</Text>

        </View>;

        case "calls":
          const bottomIcons = [
 { icon: <Ionicons name="call-outline" size={24} color="black" />, label: "Calls" },
 { icon: <FontAwesome name="calendar" size={24} color="black" />, label: "Schedule" },
 { icon: <MaterialIcons name="dialpad" size={24} color="black" />, label: "Keypad" },
 { icon: <FontAwesome name="heart-o" size={24} color="black" />, label: "Favorites" },
];
          return(
            

<View style={styles.bottomBar}>
  {bottomIcons.map((item, index) => (
    <View key={index} style={styles.iconWrapper}>
      <View style={styles.iconSetting}>
        {item.icon}
      </View>
      <Text style={styles.iconText}>{item.label}</Text>
    </View>
  ))}
</View>


          );

        // default:
        // return "WhatsApp";

    }
  }

  const getStatusSetting = () => {
    switch (currentPage){
      case "chats":
        return <View style={styles.middleBarButtonContainer} >
          {[
            { key: "All" },
            { key: "Unread" },
            { key: "Favorites" },
            { key: "Groups" },
            { key: "+" },

          ].map((item, index) => {
            return <TouchableOpacity key={index} style={styles.middleBarButton}>
              <Text style={styles.middleBarText} >{item.key}</Text>
            </TouchableOpacity>
          })}

        </View>

        case "updates":
          return  <View style={styles.statusCardContainer}>
            
          <StatusCarousel
  data={statusData}
  onPressStatus={(item) => console.log("Open Status:", item)}
/>
          </View>        


        // default:
        // return "WhatsApp";
    }

        
  }

  const getUpdateMiddleBarSetting = () => {
    switch (currentPage) {

      case "chats":
        return  (
        <TouchableOpacity>
          <View style={styles.archiveContainer} >
            
          <View style={styles.archiveLeftContainer} >
            <Ionicons name="archive-outline" size={22} color="#8d8989ff" />
            <Text style={styles.archive_text} >Archived</Text>
          </View>

          <View style={styles.archiveRightContainer}>
            <View style={styles.archiveborder} >
              <Text style={styles.archiveCounter} >5</Text>
            </View>
            
          </View>
          </View>



        </TouchableOpacity>);

          case "updates":
            return (
            <View style={styles.channelContainer}>
              <Text style={styles.textChannel}>
                Channels
              </Text>

              <TouchableOpacity activeOpacity={0.8} style={styles.exploreButton}>
                <Text style={styles.exploreButtonText}>Explore</Text>                

              </TouchableOpacity>

            </View>
            );

        //      default:
        // return "WhatsApp";


    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topBarContainer} >

        <View style={styles.topBarContent} >
          <Text style={styles.topBarText} >{getHeaderTitle()}</Text>
          <View style={styles.topBarText_Icon} >
            {getHeaderIcon()}
            {/* <Ionicons name="camera-outline" size={24} color="black" /> */}
            {/* <MaterialCommunityIcons name="dots-vertical" size={24} color="black" /> */}
            {getHeaderSettingDots()}
          </View>
        </View>

        {getUpdateSetting()}

        {getStatusSetting()}

        {getUpdateMiddleBarSetting()}

        {/* <View style={styles.middleBarButtonContainer} >
          {[
            { key: "All" },
            { key: "Unread" },
            { key: "Favorites" },
            { key: "Groups" },
            { key: "+" },

          ].map((item, index) => {
            return <TouchableOpacity key={index} style={styles.middleBarButton}>
              <Text style={styles.middleBarText} >{item.key}</Text>
            </TouchableOpacity>
          })}

        </View> */}

       

      </View>

      {ActivePage()}


      <View style={styles.bottomBarContainer} >
        {[
          { key: "chats", icon: <IconChats width={70} /> },
          { key: "updates", icon: <IconUpdates width={70} /> },
          { key: "communities", icon: <IconGroup width={70} /> },
          { key: "calls", icon: <IconCalls width={70} /> },

        ].map((item, index) => {
          return <TouchableOpacity key={index} onPress={() => {
            setCurrentPage(item.key)
          }} style={styles.bottomBarButton} >{item.icon}
            <Text style={styles.bottomBarText} >{item.key}</Text>

          </TouchableOpacity>
        })
        }
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },


  bottomBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 15,
  paddingHorizontal: 10,
  
},

iconWrapper: {
  alignItems: "center",
},

iconSetting: {
  height: 55,
  width: 55,
  borderRadius: 55,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#e4e6e8",
  marginBottom: 6, // icon aur text ke darmiyan gap
},

iconText: {
  fontSize: 11,
  color: "black",
},


  // iconBarContainer:{
   
  // },
  // iconBar:{
  //    flexDirection:"row",
  //   justifyContent:"space-between",
  //   paddingVertical:verticalScale(20),
  //   paddingHorizontal:moderateScale(10),
    
  // },
  // iconSetting:{
  //   height:moderateScale(55),
  //   width:verticalScale(50),
  //   borderRadius:moderateScale(50),
  //   alignItems:'center',
  //   justifyContent:'center',
  //   backgroundColor:"#e4e6e8",
  // },

  // iconBarText:{
  //   flexDirection:'row',
  //   justifyContent:"space-between",
  //   paddingHorizontal:moderateScale(25),
    

  // },
  // iconText:{
  //   fontSize:moderateScale(11),
  // },

  channelContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingTop:verticalScale(10),
    alignItems:"center"

  },
  exploreButton:{
    backgroundColor:"#e4e6e8",
    borderRadius:moderateScale(50),
    
    
  },
  exploreButtonText:{
    paddingVertical:verticalScale(5),
    paddingHorizontal:moderateScale(20),

  },

  textChannel:{
    fontSize:moderateScale(20)
  },


  statusBarContainer:{
    paddingTop: verticalScale(20),
    
  },
  statusCardContainer:{
    paddingVertical:verticalScale(13),
    paddingStart:moderateScale(5),
    
  },

  statusBarText:{
    fontSize:moderateScale(20),
  },
  
 
  statusCard:{},
 

  topBarContainer: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: moderateScale(12),

  },
  topBarContent: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"

  },
  topBarText_Icon: {
    flexDirection: 'row',
    gap: scale(15)
  },

  topBarText: {
    fontSize: moderateScale(25),
    color: "#23b769",
    fontWeight: "bold",




  },


  middleBarButtonContainer: {
    
    flexDirection: "row",
    // gap:moderateScale(15),
    paddingHorizontal: moderateScale(5),
    paddingVertical: verticalScale(20),
    justifyContent: "space-between"
  },
  middleBarButton: {
    height: verticalScale(28),
    justifyContent: 'center',
    alignItems: 'center',
    width: "auto",
    // backgroundColor:"red",
    borderRadius: 50,
    borderColor: "#cfcbcbff",
    borderWidth: 1
  },
  middleBarText: {
    paddingHorizontal: moderateScale(10),
    color: "#8d8989ff",


  },


   archiveContainer: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
    paddingTop: verticalScale(5),
    
  },
  archiveLeftContainer: {
    flexDirection: "row",
    gap: moderateScale(25),
    paddingHorizontal: moderateScale(10),
    alignItems: "center",
  },
  archive_text: {
    // color:"#8d8989ff",
  },

  archiveRightContainer: {
    
    
    
     alignItems:"flex-end",   

  },

  archiveborder:{
    width:moderateScale(22),
    
          height:moderateScale(22),
          borderRadius:moderateScale(22),
          alignItems:"center",
          justifyContent:"center",
          
  },
  archiveCounter: {
    fontSize:moderateScale(11),
    fontWeight:"bold",
       
    
  },



  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: verticalScale(45),
    backgroundColor: "#e4e6e8",
    borderRadius: scale(50),
    marginTop: verticalScale(15),
    paddingHorizontal: scale(12),


  },
  topBarSearchBar: {
    flex: 1,


  },

  bottomBarContainer: {

    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(0),
    borderTopWidth: 0.2,
    borderBlockColor: "#d1cacaff",
    paddingVertical: verticalScale(14),
    alignItems: "center",




  },
  bottomBarButton: {
    flex: 1,
    alignItems: "center",



  },
  bottomBarText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'black',
    textTransform: "capitalize",

  },


})

export default Main