import { StyleSheet, Text, View ,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput,useTheme } from 'react-native-paper';
import HomeImageSlider from './component/HomeImageSlider';
import { responsiveScreenFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { assignToLoginToken, assignToLoginUserData } from '../../../../redux/reducers/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";

const HomeScreen = () => {
    const { loginUser} = useSelector((state) => state.user);
    const dispatch=useDispatch()
    const toast=useToast()

  const theme=useTheme()

  const navi=useNavigation()
  const handleGo=()=>{
    navi.navigate("HomeOther")

  }
  const handleLogout=async()=>{
    await AsyncStorage.removeItem('loginToken')
    dispatch(assignToLoginToken(null))
    dispatch(assignToLoginUserData(null))
    toast.show("Logout Successfully ....",{
        type:"success",
        placement: "top",
         duration: 3000,
        offset: 30,
       animationType: "slide-in | zoom-in",
      })
    // console.log("logout")

  }
  return (
    <>
     <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primaryBackground} />
     <HomeImageSlider/>
    <View style={{padding:50}}>
      <Text>
        so, "Lorem ipsum" is a placeholder text commonly used in the printing and typesetting industry. It's used to fill space in a document to give an impression of how the final text will look. The full phrase is "Lorem ipsum dolor sit amet, consectetur adipiscing elit," and it doesn't have a specific meaning as it's nonsensical Latin. It's just a standard placeholder text. Is there anything specific you'd like to know or discuss related to "Lorem ipsum"?
      </Text>
       <TouchableOpacity  onPress={handleGo}>
        <Text style={{textAlign:"center"}}>GO TO OTHER</Text>

      </TouchableOpacity>

     
        
    </View>
     <TouchableOpacity style={{padding:10,backgroundColor:theme.colors.primary,
    margin:30}} onPress={handleLogout}>
            <Text style={{fontSize:responsiveScreenFontSize(1.8),
            color:theme.colors.primaryText,textAlign:"center"}}>Logout</Text>
        </TouchableOpacity>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})