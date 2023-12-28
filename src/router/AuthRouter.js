import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Auth/SignUp/SignUpScreen';
import LoginScreen from '../Auth/Login/LoginScreen';
import OnBoardScreen from '../Auth/OnBoard/OnBoardScreeen';


const Stack = createNativeStackNavigator();

const AuthRouter = () => {
    
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="ONBAORD" component={OnBoardScreen}/>

            <Stack.Screen name='LOGIN' component={LoginScreen}/>
            <Stack.Screen name='SIGNUP' component={SignUpScreen}/>


    </Stack.Navigator>
   
  )
}

export default AuthRouter
