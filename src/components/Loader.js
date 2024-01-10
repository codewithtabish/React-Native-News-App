import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View className="flex-1 justify-center items-center">
        <ActivityIndicator/>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})