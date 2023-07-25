import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Styles } from '../estilos/estilos';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import crearProduct from './crearProduct';
import { Provider } from 'react-redux';
import AddItem from '../componens/AddItem';
import ItemList from '../componens/ItemList';
import store from '../store/store';




export default function verProduct (props) {
    
    return (
        <ScrollView>
            <TouchableOpacity style={Styles.boton} onPress={()=>props.navigation.navigate('Create')}> 
            <Text style={Styles.textoBoton}>agregar producto</Text>
        </TouchableOpacity>
        <Provider store={store}>
                <View>
                    <ItemList />
                </View>
        </Provider>
        </ScrollView>
    );
}