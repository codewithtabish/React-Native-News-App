import { ImageBackground, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import { InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const WelcomeScreen = () => {
  const navigation=useNavigation()
   const [isLoaded, setIsLoaded] = useState(false);
     const isDevelopment = __DEV__; // Flag for test or production ad unit IDs


useEffect(() => {
    const interstitial = new InterstitialAd({
      adUnitID: isDevelopment ? TestIds.INTERSTITIAL : 'ca-app-pub-2101779718159669/9009326985',
    });

    // interstitial?.load()?.then(() => setIsLoaded(true));

    // return () => interstitial.destroy();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('willBlur', () => {
      if (isLoaded) {
        interstitial.show().then(() => setIsLoaded(false));
      } else {
        console.warn('Ad not loaded yet, navigation skipped');
      }
    });

    return unsubscribe;
  }, [navigation, isLoaded]);





     const [fontsLoaded, fontError] = useFonts({
    "SpaceGroteskSemiBold": require("../../../assets/fonts/SpaceGrotesk-SemiBold.ttf"),
    "SpaceGroteskBold": require("../../../assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGroteskMedium": require("../../../assets/fonts/SpaceGrotesk-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare(){
      // await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  
  }, [])

    if (!fontsLoaded) {
    console.log("Not loaded")
    console.log(fontError)
    return undefined;
  }else{
    // SplashScreen.hideAsync()
  }


  
  const goToMain=()=>{
    navigation.replace("HomeTabs")
  }
  return (
   <ImageBackground source={require('../../../assets//welcome/reporter.jpg')}
   className="flex-1 justify-center items-center">
     <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
     
     <View className="absolute left-0 right-0 flex-row justify-center " 
     style={{height:responsiveScreenHeight(30),
    bottom:responsiveScreenHeight(5)}}>
    <View style={{width:responsiveScreenWidth(85),
  margin:"auto"}}>
      <Text 
      className="text-center text-light-lightPrimary font-bold italic"
      
      style={{fontSize:responsiveScreenFontSize(3.5),
        fontFamily:"SpaceGroteskMedium",
      textAlign:"center"}}>  Stay Informed from Day One</Text>
      <Text style={{fontSize:responsiveScreenFontSize(2.1),width:responsiveScreenWidth(85),
      
      marginTop:responsiveScreenHeight(1.5)}} className="text-white italic text-center 
      leading-6 tracking-wider

      ">
          Discover the Latest News with our Seamless Onboarding Experience.
      </Text>
      <TouchableOpacity 
         onPress={goToMain}
      className="bg-light-lightPrimary p-3 rounded-md "
      style={{width:responsiveScreenWidth(85),
        marginTop:responsiveScreenHeight(3)
        
    
      }}>
        <Text className="text-light-lightBackground italic text-center" 
        style={{fontSize:responsiveScreenFontSize(2.1),
        fontFamily:"SpaceGroteskBold"}}>
          Getting Started
        </Text>
      </TouchableOpacity>
    </View>

     </View>


    


   </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})