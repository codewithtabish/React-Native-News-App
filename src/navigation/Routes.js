import React,{useState,useEffect} from 'react'
import AuthRouter from '../router/AuthRouter'
import MainRouter from '../router/MainRouter'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assignToLoginUserData } from '../redux/reducers/userSlice';
import { getLoginUserData } from '../services/apiMethods';
import { useDispatch, useSelector } from 'react-redux';

const Routes = () => {
        const [showApp, setShowApp] = useState(false)
       const { loginUser,loginToken} = useSelector((state) => state.user);
      const dispatch=useDispatch()

    const showAppMode=()=>{
    setTimeout(() => {
      setShowApp(true)
    }, 3000);
   }

   
  
    useEffect(() => {
        getLoginData()
        showAppMode()
    
    }, [loginToken])

    useEffect(() => {
      getLoginData()

      
    }, [])
    

    


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

   return (
  <>
    {showApp ? (
      <>
        {!loginUser?.email ? <AuthRouter /> : <MainRouter />}
      </>
    ) : (
      // You can render something else or nothing when showApp is false
      null
    )}
  </>
);

 
}

export default Routes
