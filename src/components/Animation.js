import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useColorScheme } from "nativewind";

const { width,height } = Dimensions.get('window');

const Animation = ({ savedArticle }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current?.play();
  }, [animationRef]); // Trigger on animation source change

  return (
    <View
      style={styles.container} // Use a stylesheet for clarity
    >
    <View  className="flex-row justify-center items-center max-w-[1/2]">
        <LottieView
        className="w-[100%] h-[100%]"
        ref={animationRef}
        source={colorScheme==="light"?require('../../assets/anim/searchtwo.json'):require('../../assets/anim/five.json')}
        style={styles.animation}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // ...other styling as needed
  },
  // animation: {
  //   width: width*.7,
  //   height: height*.7,
  // },
});

export default Animation;
