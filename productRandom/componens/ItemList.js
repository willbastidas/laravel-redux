import React from 'react';
import { Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
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
    <FlatList
      data={items}
      renderItem={({ item }) => (
          <ScrollView>
          <View style={[Styles.Textinput]}>
            <Text style={[Styles.contentTextInput]}> Nombre Del Producto: {item.nombre}</Text>
          </View>
          <View style={[Styles.Textinput]}>
            <Text style={[Styles.contentTextInput]}> Descripcion Del Producto: {item.descripcion}{' '}</Text>
          </View>
          <View style={[Styles.Textinput]}>
            <Text style={[Styles.contentTextInput]}> Tipo Del Producto: {item.tipo}{' '}</Text>
          </View>
          <View style={[Styles.Textinput]}>
            <Text style={[Styles.contentTextInput]}> Stock Del Producto: {item.stock}{' '}</Text>
          </View>
          <View style={[]}>
            <TouchableOpacity >
              <Text onPress={() => handleRemove(item.id)} style={[Styles.textCenter, 
                Styles.botonEliminar1, Styles.spaceBoton]}>
                Eliminar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;