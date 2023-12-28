import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen/HomeScreen';
import HomeOtherScreen from './screen/HomeOther/HomeOtherScreen';

const Stack = createNativeStackNavigator();

function HomeRouter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeMain' component={HomeScreen}
        options={{headerShown:false}}
        />
        <Stack.Screen name='HomeOther' component={HomeOtherScreen}
        options={{headerShown:false}}
        />

    </Stack.Navigator>
  );
}

export default HomeRouter

