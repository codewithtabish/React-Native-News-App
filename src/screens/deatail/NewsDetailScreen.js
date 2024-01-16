import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  Share,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
// import Loading from "../components/Loading";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/outline";
import { BookmarkSquareIcon } from "react-native-heroicons/solid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";
import Loader from "../../components/Loader";
import BannerAd from "../../components/BannerAd";


const {height,width}=Dimensions.get('window')

const NewsDetailScreen = () => {
   const { params: item } = useRoute();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [isBookmarked, toggleBookmark] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
    const { colorScheme, toggleColorScheme } = useColorScheme();


    const toggleBookmarkAndSave = async () => {
    try {
      // Check if News Article is already in Storage
      const savedArticles = await AsyncStorage.getItem("savedArticles");
      let savedArticlesArray = savedArticles ? JSON.parse(savedArticles) : [];
      console.log("Check if the article is already bookmarked");

      // Check if the article is already in the bookmarked list
      const isArticleBookmarked = savedArticlesArray.some(
        (savedArticle) => savedArticle.url === item.url
      );

      console.log("Check if the article is already in the bookmarked list");

      if (!isArticleBookmarked) {
        // If the article is not bookmarked, add it to the bookmarked list
        savedArticlesArray.push(item);
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(savedArticlesArray)
        );
        toggleBookmark(true);
        console.log("Article is bookmarked");
      } else {
        // If the article is already bookmarked, remove it from the list
        const updatedSavedArticlesArray = savedArticlesArray.filter(
          (savedArticle) => savedArticle.url !== item.url
        );
        await AsyncStorage.setItem(
          "savedArticles",
          JSON.stringify(updatedSavedArticlesArray)
        );
        toggleBookmark(false);
        console.log("Article is removed from bookmarks");
      }
    } catch (error) {
      console.log("Error Saving Article", error);
    }
  };

  useEffect(() => {
    // Load saved articles from AsyncStorage when the component mounts
    const loadSavedArticles = async () => {
      try {
        const savedArticles = await AsyncStorage.getItem("savedArticles");
        const savedArticlesArray = savedArticles
          ? JSON.parse(savedArticles)
          : [];

        // Check if the article is already in the bookmarked list
        const isArticleBookmarked = savedArticlesArray.some(
          (savedArticle) => savedArticle.url === item.url
        );

        toggleBookmark(isArticleBookmarked);
        console.log("Check if the current article is in bookmarks");
      } catch (error) {
        console.log("Error Loading Saved Articles", error);
      }
    };

    loadSavedArticles();
  }, [item.url]);


  const shareArticle=async()=>{
  try {
      const result=await Share.share({
        message:("TrendAlert"+ `\n` +item.url)
       
      })
  
       if(result.action===Share.sharedAction){
          
        if(result.activityType){
  
          console.log("Shared with activity type of ",result.activityType)
  
  
        }else{
          console.log("Shared")
        }
          
        }
        else if(result.action===Share.dismissedAction){
          console.log("dismissed")
  
        }
     } catch (error) {

      console.log("The error is ",error)

    
  }
  }







  return (
    <View   className="flex-1 bg-light-lightBackground dark:bg-dark-darkBackground">
         <View className="w-full flex-row justify-between items-center px-4 pt-4 pb-4  bg-light-lightBackground dark:bg-dark-darkBackground">
        <View className=" p-1 rounded-full items-center justify-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size={24} strokeWidth={3} color="gray" />
          </TouchableOpacity>
        </View>

        <View className="space-x-3 rounded-full items-center justify-center flex-row">
          <TouchableOpacity className=" p-2 rounded-full"
          onPress={shareArticle}>
            <ShareIcon size={25} color="gray" strokeWidth={2} />
          </TouchableOpacity>
          <TouchableOpacity
            className=" p-2 rounded-full"
            onPress={toggleBookmarkAndSave}
          >
            <BookmarkSquareIcon
              size={25}
              color={isBookmarked ? "green" : "gray"}
              strokeWidth={2}
            />
          </TouchableOpacity>
        </View>



      </View> 

      {/* WEBVIEW IMPLEMENTAION */}

      <WebView
      // style={{backgroundColor:"red"}}
      className="bg-light-lightBackground dark:bg-dark-darkBackground"
      source={{uri:item.url}}
        allowsBackForwardNavigationGestures={true}
        // Other props...
     javaScriptEnabled={true}
     onShouldStartLoadWithRequest={(event) => {
    // Handle link clicks as needed
    return true;
    }}
      onLoad={()=>setVisible(true)}
      onLoadEnd={()=>setIsVisible(false)}
      onLoadProgress={({ nativeEvent }) => {
          // Check if the WebView has completed loading
          if (nativeEvent.progress === 1) {
            // setVisible(false);
            setIsVisible(false);
          }
        }}


      />
      {
        visible && (
          <ActivityIndicator
          size={"large"}
          color={"green"}
          style={{
            position:"absolute",
            top:height/2,
            left:"50%",
            right:"50%"
          }}
          />
        )
      }

      {
        !visible && (
          <BannerAd/>
        )
      }
 
    
    </View>
  )
}

export default NewsDetailScreen

// const styles = StyleSheet.create({})