import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

const DiscoredSearch = () => {

    const navi=useNavigation()


  return (
    <View className="mx-4 flex-row justify-between items-center bg-neutral-100 p-2 py-3 rounded-full">
        <TouchableOpacity className="pl-2">
          <MagnifyingGlassIcon
          size={26}
          color={"gray"}

          />
          
        </TouchableOpacity>

        <View className="pl-4 flex-1">
            <TextInput
            onPress={()=>navi.navigate("Search")}
            className="tracking-wider font-medium text-black w-full"
             // onChangeText={handleTextDebounce}
            placeholder="Search for news"
            placeholderTextColor={"gray"}
            />
          </View>
        
    </View>
  )
}

export default DiscoredSearch

const styles = StyleSheet.create({})