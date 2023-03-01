import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Account from '../screens/Account';
import TopRestaurants from '../screens/TopRestaurantes';
import Search from '../screens/Search';
import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
     <NavigationContainer>
        <Tab.Navigator  >
            <Tab.Screen 
               name='restaurantes'
               component={RestaurantsStack}
               options={{headerShown : false}}
            />
            <Tab.Screen
               name='favoritos'
               component={FavoritesStack}
               options={{headerShown : false}}
            />
            <Tab.Screen 
               name='top-restaurantes'
               component={TopRestaurantsStack}
               options={{headerShown : false}}
             
             />
             <Tab.Screen 
               name='buscar'
               component={SearchStack}
               options={{headerShown : false}}
             />
             <Tab.Screen
               name='account'
               component={AccountStack}
               options={{headerShown : false}}
             />

        </Tab.Navigator>
     </NavigationContainer>
  )
}