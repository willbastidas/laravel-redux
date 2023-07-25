import { StyleSheet } from "react-native";
import { colores } from "./colors";


export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      conteiner2: {
        flex: 1,
        padding: 35,
      },
      containerScroll: {
        flex: 1,
        backgroundColor: '#fff',
      },
      containerScroll2: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10, 
      },
      boder : {
        borderRadius: 10,
      },
      titulo:{
        textAlign: "center",
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20,
      },
      boton:{
        marginTop: 8,
        marginBottom: 8,
        paddingVertical: 8,
        borderWidth: 5,
        borderColor: colores.gray,
        borderRadius: 10,
        backgroundColor: colores.green_watercolor,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
      spaceBoton: {
        padding: 30,
      },
      botonEliminar:{
        backgroundColor: colores.orange,
        height: 35,
        borderColor: colores.dark,
        borderRadius: 10,
        borderWidth: 1,
      },
      botonEliminar1:{
        marginTop: 16,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#20232a',
        borderRadius: 10,
        backgroundColor: colores.orange,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      textoBoton:{
        fontSize: 25,
        textAlign: 'center',
      },
      textoTitulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
      },
      textoNombre: {
        fontSize:16,
      },
      textCenter: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
      },
      textCenterInput: {
        textAlign: 'justify',
        fontSize: 18,
      },
      botonLista:{
        backgroundColor: colores.black,
        borderButtomWidth: 1,
        borderButtomColor: colores.c,
        marginBottom: 3,
        padding: 5,
      },
      inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: colores.gray,
      },
      Textinput: {
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: colores.gray,
        marginBottom: 7,
      },
      contentTextInput :{
        fontSize: 18,
      },
});