import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../Main/MainBottomNavigator';
import {StatusBar} from 'react-native'
import { TextInput,useTheme } from 'react-native-paper';



const Stack = createNativeStackNavigator();


const MainRouter = () => {
  const theme=useTheme()
  return (
    // <NavigationContainer>
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primaryBackground} />
      <Stack.Navigator
      >
        <Stack.Screen name='MainTabs' component={MyTabs}
        options={{headerShown:false}}/>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      </Stack.Navigator>
    </>
    // </NavigationContainer>

  )
}


export default MainRouter
