import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import Routes from './Routes'
import { ToastProvider } from 'react-native-toast-notifications'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../Auth/Login/LoginScreen';
// import { useDispatch, useSelector } from 'react-redux';
import { assignToLoginUserData } from '../redux/reducers/userSlice';
import { getLoginUserData } from '../services/apiMethods';



const AppNavigator = () => {
        const [showApp, setShowApp] = useState(false)
        const { loginUser,loginToken} = useSelector((state) => state.user);
        const dispatch=useDispatch()

    const showAppMode=()=>{
    setTimeout(() => {
      setShowApp(true)
    }, 3000);
   }

     useEffect(() => {
    showAppMode()
    
   }, [])
  //  MY WORK  
       const getLoginData=async()=>{
      const token=await AsyncStorage.getItem('loginToken')
      console.log("The token is ",token)
        const header={
        'Authorization': `Bearer ${token}`,
        }
        const response=await getLoginUserData(header)
        if(response.status==="success"){
            dispatch(assignToLoginUserData(response?.user))
          
        }

    }

    // useEffect(() => {
    //   getLoginData()
     
    // }, [loginUser,loginToken])
    


  
  
   return (
    <>
    <ToastProvider>
        <Routes/>

    </ToastProvider>
    
    </>
   )
 
}

export default AppNavigator
