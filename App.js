import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import HomeSubScreen from './src/screens/HomeSubScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HomeSubScreen" component={HomeSubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
