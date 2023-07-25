import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Styles } from './estilos/estilos';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import crearProduct from './screen/crearProduct';
import verProduct from './screen/verProduct';


export default function App() {

  const Stack = createStackNavigator ();
  function MyStack (){
    return (
      <Stack.Navigator>
      <Stack.Screen name="List" component={verProduct}/>
      <Stack.Screen name="Create" component={crearProduct}/>
    </Stack.Navigator>
    ) 
    
  }

  return (
    <NavigationContainer>
     <MyStack></MyStack>
    </NavigationContainer>
   );
}
