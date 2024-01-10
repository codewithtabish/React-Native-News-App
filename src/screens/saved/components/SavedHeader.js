import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const SavedHeader = ({setSavedArticles}) => {


  const clearSavedArticles = async () => {
    try {
      await AsyncStorage.removeItem("savedArticles");
      setSavedArticles([]);
      console.log("Clear all saved articles");
    } catch (error) {
      console.log("Error clearing saved articles", error);
    }
  };

  


  return (
    <View className="mx-4 my-4">
      <View className="flex-row justify-between items-center">
        <Text
          className="font-bold text-xl text-light-lightPrimary dark:text-dark-darkText"
          style={{
            fontFamily: "SpaceGroteskBold",
          }}
        >
        </Text>
        <TouchableOpacity
          onPress={clearSavedArticles}
          className="bg-light-lightPrimary py-1 px-4 rounded-lg dark:bg-light-lightBackground "
        >
          <Text
            className="font-bold text-sm text-light-lightBackground dark:text-dark-darkBackground"
            style={{
              fontFamily: "SpaceGroteskBold",
            }}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SavedHeader

const styles = StyleSheet.create({})