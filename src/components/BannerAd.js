import React,{useState,useEffect} from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { BannerAd as MyBannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const BannerAd = () => {
  const [adLoaded, setAdLoaded] = useState(true);
      // Determine if the app is in development
  const isDevelopment = __DEV__; // This is a React Native global variable

  // Choose the appropriate ad unit ID
  const adUnitID = isDevelopment
    ? TestIds.BANNER // Use test ad unit ID during development
    : 'ca-app-pub-2101779718159669/8096217489'; // Use real ad unit ID in production


   const handleAdFailedToLoad = (error) => {
  console.error('Ad failed to load:', error);
};

// useEffect(() => {
//   // handleAdLoaded()
 
// }, [adLoaded])




   // Function to handle when the ad is loaded
  const handleAdLoaded = () => {
    setAdLoaded(true);
  };

    {
      return (
      adLoaded? (
        <View style={{width:responsiveScreenWidth(100)}} 
    className="flex justify-end  items-center flex-1 absolute bottom-0 left-0 right-0 w-full mb-1">
     
         <MyBannerAd
       style={styles.banner}
        unitId={adUnitID} // Use TestIds.BANNER for testing, replace with your actual ad unit ID
        size={BannerAdSize.BANNER}
          onAdLoaded={handleAdLoaded}
          // style={{width:"100%"}}
           onAdFailedToLoad={handleAdFailedToLoad}
      />
     
     </View>
      ):null
      )

    }


}


export default BannerAd;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
   width: '100%', // Set width to 100%
    height: 50, // Adjust height as needed
  },
});
