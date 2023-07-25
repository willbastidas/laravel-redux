import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import { Styles } from '../estilos/estilos';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../reducer/reducers';

const ItemList = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeItem(id));
  };

  return (
    <ScrollView>
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Text>
          {item.nombre} - {item.descripcion}-{item.tipo} - {item.stock}{' '}
          <Text onPress={() => handleRemove(item.id)}>Eliminar</Text>
        </Text>
      )}
      keyExtractor={item => item.id}
    />
    </ScrollView>
  );
};

export default ItemList;