import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useColorScheme } from "nativewind";
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
     // darkPrimary: '#2980b9',

const HomeHeader = () => {
       const { colorScheme, toggleColorScheme } = useColorScheme();
       const navi=useNavigation()
       const handleSearchPress=()=>{
        navi.navigate("Search")

       }
       

       

  return (
    <View className="flex flex-row justify-between  items-center mx-4" style={{
        marginTop:responsiveScreenHeight(.5)
    }}>
        <View>
            <Text className="text-light-lightPrimary dark:text-dark-darkPrimary italic"
            style={{
                fontWeight:"bold",
                fontSize:responsiveScreenFontSize(3.2),
                fontFamily:"SpaceGroteskBold"
            }}></Text>
        </View>
        <View className="flex flex-row space-x-4 items-center">
            <Switch value={colorScheme=="dark"} onChange={toggleColorScheme} />
            <AntDesign name="search1" size={26} color={colorScheme=="dark"?"#ffffff":"#33CC66"}
            onPress={handleSearchPress} />
        </View>
       
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({})