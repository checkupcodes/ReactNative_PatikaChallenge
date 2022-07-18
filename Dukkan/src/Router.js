import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Details from './pages/Details/Details';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products Page" component={Products} />
        <Stack.Screen name="Details Page" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
