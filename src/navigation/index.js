import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import Tabs from './Tabs';
import SplashScreen from '../screens/Splash/SplashScreen';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import NewsDetailScreen from '../screens/deatail/NewsDetailScreen';
import { CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator()

const AppNavigation = () => {
return (
    <NavigationContainer>

   <Stack.Navigator 
   initailRouteName="Splash"
     screenOptions={{
          headerShown:false,
           cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
       
        }}
//    screenOptions={{headerShown:false}}
   >
    
    {/* <Stack.Screen name='Welcome' component={WelcomeScreen}/> */}
    {/* <Stack.Screen name='Splash' component={SplashScreen}/> */}
      <Stack.Screen name="HomeTabs" component={Tabs}
    screenOptions={{headerShown:false}} />  
    <Stack.Screen name='Search' component={SearchScreen}/>
    <Stack.Screen name='NewsDetail' component={NewsDetailScreen}
    //  options={{
    //         cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    //       }}
    />
  
    </Stack.Navigator>
    </NavigationContainer>
)
}

export default AppNavigation
