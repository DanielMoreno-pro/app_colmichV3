import React from "react";
import { Image, StyleSheet, View, TextInput, requireNativeComponent, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function CEH() {
  const navigation = useNavigation();
  return (
  <View style={styles.viewBtn}>
  <Image
      style={styles.photo}
     /* source={require("../imagenes/colmich.jpg")}*/
     /* source={{uri: "./imagenes/colmich.jpg" }}*/
     source={{ uri: 'https://source.unsplash.com/featured/?{Tradition}' }}
    />

<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"En 1983, cuatro años después de la fundación de El Colegio de Michoacán, se creó el Centro de Estudios de las Tradiciones que a partir de 1984 implementó una Maestría en Estudios Étnicos, programa exitoso que en 1999 dio origen al actual Doctorado en Ciencias Humanas, Especialidad en Estudio de las Tradiciones. Nuestro programa doctoral tiene como objetivo la formación de investigadores de alta calidad, capaces de estudiar las diferentes tradiciones que dieron origen al México multicultural y que son expresadas en textos escritos y pintados o que son comunicadas de manera oral. Este objeto de estudio es abordado desde un enfoque multi- e interdisciplinario que combina herramientas teóricas y metodológicas de distintas disciplinas académicas: la filología, lingüística, traductología, diplomática, iconología, historia, antropología, filosofía, hermenéutica, heurística y semiología. Nuestro programa, el único en el país que se dedica al estudio de las tradiciones, pertenece a la categoría de Competencia Internacional en el Padrón Nacional de Posgrados de Calidad (PNPC) de Conacyt."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

<Button style={styles.viewBtn}
        title="Docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("DocentesCET")}
      />  

  </View>
  
  );
}
const styles = StyleSheet.create({

  viewBtn: {
     
  flex:6,
  paddingTop: 20,
  paddingBottom: 20,
  justifyContent: 'center',
  margin:20
  },

  photo: {
    height: 250,
    width: 350,
    marginBottom: 20,
    marginTop: 5
  },
   
  TextInputStyleClass:{
 
    textAlign: 'center',
    height: 100,
    borderWidth: 2,
    borderColor: '#9E9E9E',
    borderRadius: 20 ,
    backgroundColor : "#FFFFFF",
    height: 250
     
    },
    btnStyle: {
      backgroundColor: "#008000"
    },
  
    btnContainer: {
      width: "70%",
      marginTop:20
     
      
    }
});


