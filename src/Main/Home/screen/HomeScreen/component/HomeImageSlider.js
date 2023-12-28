import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity,Text } from 'react-native';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import Swiper from 'react-native-swiper';
import { useTheme } from 'react-native-paper';

const HomeImageSlider = () => {
    const theme=useTheme()
  const images = [
    'https://images.unsplash.com/photo-1682695795557-17447f921f79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
   <View style={{height:responsiveScreenHeight(25)}}>
     <Swiper
     bounces={true}
      autoplay={true} // Set to true to enable auto play mode
    autoplayTimeout={2} // Delay between auto play transitions in seconds (2 seconds in this case)
      style={styles.wrapper}
    //   showsButtons={true}
      height={responsiveScreenHeight(25)} // Adjust the height as needed
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      {images.map((imageUrl, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      ))}
    </Swiper>
    
   </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    // flex: 1/2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  pagination: {
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 5,
    backgroundColor: '#007aff',
  },
});

export default HomeImageSlider;
