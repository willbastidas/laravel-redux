import * as React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Styles } from '../estilos/estilos';
import { Provider } from 'react-redux';
import AddItem from '../componens/AddItem';
import store from '../store/store';


export default function crearProduct (props) {
    
    return (
        <Provider store={store}>
            <ScrollView>
                <TouchableOpacity style={Styles.boton} onPress={()=>props.navigation.navigate('List')}> 
                    <Text style={Styles.textoBoton}>Ver Productos</Text>
                </TouchableOpacity>
                <View>
                    <AddItem />
                </View>
            </ScrollView>
        </Provider>

    );
}