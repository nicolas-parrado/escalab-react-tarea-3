import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const RootStack = createStackNavigator();
const RootNavigation = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="main" component={Home} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
