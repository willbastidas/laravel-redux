import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Styles } from '../estilos/estilos';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../reducer/reducers';

const AddItem = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [stock, setStock] = useState('');
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(addItem({ nombre, descripcion, tipo, stock }));
       const {data} = axios.post('http://192.168.85.239:8000/api/productos', {
          nombre: nombre,
          descripcion: descripcion,
          tipo: tipo,
          stock: stock
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        setNombre('');
        setDescripcion('');
        setTipo('');
        setStock('');
      };

      return (
        <View>
          <TextInput
            style={[Styles.inputGroup, Styles.textCenterInput]}
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={[Styles.inputGroup, Styles.textCenterInput]}
            placeholder="Descripción"
            value={descripcion}
            onChangeText={setDescripcion}
          />
          <TextInput
            style={[Styles.inputGroup, Styles.textCenterInput]}
            placeholder="Tipo De Producto"
            value={tipo}
            onChangeText={setTipo}
          />
          <TextInput
            style={[Styles.inputGroup, Styles.textCenterInput]}
            placeholder="Stock"
            keyboardType='numeric'
            value={stock}
            onChangeText={setStock}
          />
          <Button title="Guardar" onPress={handlePress} />
        </View>
      );
};

export default AddItem; 
