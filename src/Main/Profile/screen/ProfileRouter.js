import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileMainScreen from './ProfileMain/ProfileMainScreen';

const Stack = createNativeStackNavigator();

function ProfileRouter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='ProfileMain' component={ProfileMainScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default ProfileRouter

