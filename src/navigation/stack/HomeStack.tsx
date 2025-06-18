import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../../interface/navigation.interface';
import HomeScreen from '../../screens/tabs/HomeScreen';
import CargoDetailScreen from '../../screens/tabs/CargoDetailScreen';

const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CargoDetailScreen" component={CargoDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
