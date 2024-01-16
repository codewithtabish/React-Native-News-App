import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './src/utils/queryClient';
import "expo-dev-client"
import { YellowBox } from 'react-native';
import { LogBox } from 'react-native';
import { useColorScheme } from "nativewind";
import {useEffect} from 'react'

// YellowBox.ignoreAllLogs(); 
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {

    const toggleMode=()=>{
      toggleColorScheme()
    }

    if(colorScheme==="dark"){
      // !colorScheme
      // toggleMode
      toggleColorScheme()
    }


  
    return () => {
    }
  }, [])
  

  return (
    <SafeAreaProvider>
      {/* Use SafeAreaView to wrap components that need to respect safe areas */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Your main navigation */}
        <QueryClientProvider client={queryClient}>
        <AppNavigation />

        </QueryClientProvider>

        {/* StatusBar */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
