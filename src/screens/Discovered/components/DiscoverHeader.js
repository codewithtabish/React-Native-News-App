import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'


const DiscoverHeader = () => {

  return (
    <View className="px-4" 
    style={{marginBottom:responsiveScreenHeight(2)}}>
        <Text className="text-3xl text-light-lightText dark:text-dark-darkText
        mt-2
        mb-1
        font-bold">Discover</Text>
        <Text className="text-sm italic text-light-lightText dark:text-dark-darkText

        ">News from all Over the World !</Text>

    </View>
  )
}

export default DiscoverHeader

const styles = StyleSheet.create({})