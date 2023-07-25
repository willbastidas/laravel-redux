import * as React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Styles } from '../estilos/estilos';
import { Provider } from 'react-redux';
import ItemList from '../componens/ItemList';
import store from '../store/store';




export default function verProduct (props) {
    
    return (
        <ScrollView>
            <View style={Styles.boton}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Create')}> 
                    <Text style={Styles.textoBoton}>agregar producto</Text>
                </TouchableOpacity>
            </View>
        <Provider store={store}>
                <View>
                    <ItemList />
                </View>
        </Provider>
        </ScrollView>
    );
}