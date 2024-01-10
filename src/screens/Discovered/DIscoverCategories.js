import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'

const DIscoverCategories = ({
      categories,
  activeCategory,
  handleCategories,
}) => {
  return (
   <View className="mx-4 my-4">
    <ScrollView
       horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{
          paddingRight: 20,
        }}
    >
        {categories.map((item,index)=>{
        let isActive = item.title == activeCategory;
          let activeButtonClass = isActive
            ? "bg-green-700 "
            : "bg-black/10 dark:bg-neutral-400 ";
          let activeTextClass = isActive
            ? "text-white "
            : "text-gray-600 dark:text-neutral-600 ";
            
            return (
              <TouchableOpacity
              key={index}
              onPress={() => handleCategories(item.title)}
              className="flex items-center space-y-1 "
            >
              <View
                className={
                  "rounded-full py-2 px-4 " + activeButtonClass
                }
              >
                <Text
                  className={"capitalize " + activeTextClass}
                  style={{
                    fontSize: responsiveScreenFontSize(1.6),
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
            )
        })}
    </ScrollView>
   </View>
  )
}

export default DIscoverCategories

const styles = StyleSheet.create({})