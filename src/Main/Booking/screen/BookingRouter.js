import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingScreen from './BookingScreen/BookingScreen';

const Stack = createNativeStackNavigator();

function BookingRouter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='BookingMain' component={BookingScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default BookingRouter

