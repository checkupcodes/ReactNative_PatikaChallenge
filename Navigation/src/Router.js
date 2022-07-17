// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import First from './pages/First';
import Second from './pages/Second';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="FirstPage" component={First} />
//         <Stack.Screen name="SecondPage" component={Second} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Adam" component={First} />
        <Tab.Screen name="Duck" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
