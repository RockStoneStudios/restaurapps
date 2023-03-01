import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopRestaurantes from '../screens/TopRestaurantes';

const Stack = createNativeStackNavigator();

const TopRestaurantsStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
         name='top-5-restaurants'
         component={TopRestaurantes}

        />
      </Stack.Navigator>
  )
}

export default TopRestaurantsStack