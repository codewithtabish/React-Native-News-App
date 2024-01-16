import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiniHeader = ({label}) => {
  return (
    <View className="px-4  justify-between flex-row items-center">
      <Text className="text-light-lightPrimary dark:text-dark-darkPrimary text-2xl
      italic py-2
      mb-1
      font-bold">{label}</Text>
      <Text className="text-gray-300 italic">
        {/* View All */}
      </Text>
    </View>
  )
}

export default MiniHeader

const styles = StyleSheet.create({})