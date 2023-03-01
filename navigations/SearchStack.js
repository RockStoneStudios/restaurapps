import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
   <Stack.Navigator>
        <Stack.Screen
           name='search'
           component={Search}
           options={{title : 'Buscar'}}
        />
   </Stack.Navigator>
  )
}

export default SearchStack