import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferMainScreen from './OfferMainScreen/OfferMainScreen';

const Stack = createNativeStackNavigator();

function OfferRouter() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='OfferMain' component={OfferMainScreen}
        options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default OfferRouter

