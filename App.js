import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import {  MD3DarkTheme, MD3LightTheme, ThemeProvider } from 'react-native-paper';
import { customDarkColors, customLightColors } from './src/theme/themeColor';
import {useState}  from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import { reduxStore } from './src/redux/store';

export default function App() {
  const [isDarkMode, setisDarkMode] = useState(false)


    const lightSchemes={
  ...MD3LightTheme,
  colors:customLightColors
}


const darkSchemes={
  ...MD3DarkTheme,
  colors:customDarkColors
}
 

 
  
   const theme=isDarkMode?darkSchemes:lightSchemes

  return (
  <Provider store={reduxStore}>
     <ThemeProvider theme={theme}>

    <NavigationContainer>
    
      <AppNavigator/>
    </NavigationContainer>


    </ThemeProvider>
   </Provider>

  )
}

