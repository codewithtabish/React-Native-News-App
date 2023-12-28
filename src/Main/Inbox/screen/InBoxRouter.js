import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InBoxMainScreen from './InboxMain/InBoxMainScreen';

const Stack = createNativeStackNavigator();

function InboxRouter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='InboxMain' component={InBoxMainScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default InboxRouter

