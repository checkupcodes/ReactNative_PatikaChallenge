// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
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

const Drawer = createDrawerNavigator();

function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Adam" component={First} />
      <Drawer.Screen name="Duck" component={Second} />
    </Drawer.Navigator>
  );
}

export default App;
