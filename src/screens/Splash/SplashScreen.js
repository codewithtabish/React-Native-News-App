import { View, Text ,Animated, Image} from "react-native";
import React, { useEffect } from "react";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenHeight,responsiveScreenWidth,responsiveScreenFontSize } from "react-native-responsive-dimensions";

export default function SplashScreens() {
  const navigation = useNavigation();

  const [fontsLoaded, fontError] = useFonts({
    SpaceGroteskSemiBold: require("../../../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    SpaceGroteskBold: require("../../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    SpaceGroteskMedium: require("../../../assets/fonts/SpaceGrotesk-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare(){
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  
  }, [])
  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate("Welcome"); // Navigate to HomeTab
    }, 3000); // 3 seconds delay
  });

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    console.log("Not loaded")
    return undefined;
  }else{
    SplashScreen.hideAsync()
  }
  
  return (
    <>
         <View
      // onLayout={onLayoutRootView}
      className="flex-1 justify-center items-center bg-white"
    >
     <Animated.View style={{ opacity:7 }}>
       <Image source={require("../../../assets/welcome/news-report.png")}
      style={{width:100,height:100,resizeMode:"cover"}}
      />
  
     </Animated.View>

           <View className="absolute left-0 right-0 flex-col justify-center  bottom-0" style={{height:responsiveScreenHeight(20),
        marginHorizontal:responsiveScreenWidth(0),maxWidth:responsiveScreenWidth(100),
        left:responsiveScreenWidth(10),
        right:responsiveScreenWidth(10)
        
        }}>
          <View className="flex-col justify-center" 
          style={{marginBottom:responsiveScreenHeight(1.5)}}>
               <Text className=" italic uppercase  text-center 
               text-light-lightPrimary
               "
       style={{fontSize:responsiveScreenFontSize(2.5),
      }}
       >
        Discover. Read. Stay Informed
      </Text>
      <Text className="text-center  italic text-gray-400 mt-2  text-sm">
        Get Real-Time Updates and Stay Ahead of the Curve</Text>
          </View>
  
     </View>

  
    </View>
    </>
  )
}
