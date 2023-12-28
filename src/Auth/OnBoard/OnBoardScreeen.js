import React, { useEffect, useRef,useState } from 'react';
import { View, Text, Dimensions, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useTheme } from 'react-native-paper';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const { width, height } = Dimensions.get('window');

const OnBoardScreen = () => {
  // const {onBoardMode}=useSelector((state)=>state.user)
  const animationRef = useRef(null);
  const theme = useTheme();
  const navi=useNavigation()
  const [appOnBoard, setappOnBoard] = useState(false)
  const [showOnBoard, setshowOnBoard] = useState(false)


  useEffect(() => {
    // changeMode()
    // goToOther()
    animationRef.current?.play();
    animationRef.current?.play(30, 120);
    StatusBar.setBackgroundColor('#4B0082')
    
    
  }, [animationRef])

  // const handleDone =async () => {
  //   const a=AsyncStorage.getItem('ONBOARD')
  //   if(a){
  //     setappOnBoard(true)
  //   }
  //   await AsyncStorage.setItem('ONBOARD',"ONBOARDON")
  //   navi.replace("Login")

    
  // }
  // const goToOther=async()=>{
  //  const p= await AsyncStorage.getItem('ONBOARD')
  //   if(p==="ONBOARDON"){
  //     navi.navigate('Login')
  //     setappOnBoard("yes")
  //   }

  // }
  // const changeMode=()=>{
  //   setTimeout(() => {
      
  //     setshowOnBoard(true)
  //   }, 1000);
  // }

  const handleDone=()=>{
    console.log("yes")
    navi.navigate("LOGIN")
  }
 

 
   return <>    
   <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primary} />
   
    
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        onSkip={() => StatusBar.setHidden(false)}
        // onDone={handleDone}
        showSkip={true}
        showNext={false} // Remove the next button
        bottomBarHighlight={false}
        bottomBarColor={theme.colors.background}
        NextButtonComponent={() => null} // Custom NextButton to replace the default
        DoneButtonComponent={({ ...props }) => (
          <TouchableOpacity 
          onPress={handleDone}
          >
            <View style={{ marginHorizontal: 10, marginBottom: 20 }}>
              <MaterialIcons name="file-download-done" size={34} color={"red"} />
            </View>
          </TouchableOpacity>
        )}
        DotComponent={({ selected }) => (
          <View
            style={{
              width: 6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor: selected ? 'red' : 'rgba(0, 0, 0, .2)',
              borderRadius: 3,
            }}
          />
        )}
        pages={[
        
          {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/doctor/mytwo.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: '100%' }}
                />
              </View>
            ),
            title: (
              <Text style={[styles.titleText,{color:theme.colors.primary}]}>
                "Welcome Aboard!
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Embark on a seamless journey with Ali Travel Agency. Discover the joy of effortless travel and extraordinary experiences
              </Text>
            ),
          },
            {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/doctor/one1.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: width }}
                />
              </View>
            ),
            title: (
              <Text style={[styles.titleText,{color:theme.colors.primary}]}>
                Choose Your Destination
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Explore a world of possibilities. Select your dream destination and let us guide you to new horizons
              </Text>
            ),
          },
          {
            image: (
              <View style={{ height: height / 2 }}>
                <LottieView
                  ref={animationRef}
                  source={require('../../../assets/anim/ecom/three.json')}
                  autoPlay={true}
                  loop={true}
                  style={{ width: width * 0.9, height: '100%' }}
                />
              </View>
            ),
            title: (
              <Text style={[styles.titleText,{color:theme.colors.primary}]}>
                Flight Options at Your Fingertips
              </Text>
            ),
            subtitle: (
              <Text style={styles.subtitleText}>
                Discover a variety of flights tailored to your preferences. Find the perfect match for your travel style and enjoy a smooth journey.
              </Text>
            ),
          },
        ]}
      />
    
    
    
    </>

 
  
};

const styles = StyleSheet.create({
  titleText: {
    paddingVertical: responsiveScreenHeight(1),
    fontSize: responsiveScreenFontSize(2.7),
    fontWeight: 'normal',
    // color: '#ADD8E6',
    fontStyle: 'italic',
  },
  subtitleText: {
    width: width * 0.7,
    textAlign: 'center',
    color: 'gray',
    fontStyle: 'italic',
    fontSize: responsiveScreenFontSize(1.7),
  },
});

export default OnBoardScreen;
