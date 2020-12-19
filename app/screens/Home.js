import React from "react";
import { Image, StyleSheet, View, TextInput, requireNativeComponent } from "react-native";



export default function Home() {
  return (
  <View style={styles.viewBtn}>
  <Image
      style={styles.photo}
     /* source={require("../imagenes/colmich.jpg")}*/
     /* source={{uri: "./imagenes/colmich.jpg" }}*/
     source={{ uri: 'https://needanoffice-test-public.s3-us-west-1.amazonaws.com/imagen-prueba.jpeg' }}
    />

<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"El Colegio inició con dos centros: Estudios Antropológicos y Estudios Históricos., A los cuatro años ya contaba con otros dos: Estudios Rurales y Estudio de las Tradiciones. En 2001 el Colegio se extiende a la cercana población de La Piedad, donde se estableció el Centro de Estudios Arqueológicos y ahí mismo en 2002 se crea el Centro de Estudios de Geografía Humana. Instalado en La Piedad a partir de 2009, el Laboratorio de Análisis y Diagnóstico del Patrimonio (LADIPA) es una instancia dedicada al estudio, análisis, diagnóstico y seguimiento científico y tecnológico del patrimonio natural y cultural material."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

  </View>
  
  );
}
const styles = StyleSheet.create({

  viewBtn: {
     
  flex:1,
  paddingTop: 20,
  justifyContent: 'center',
  margin:20,
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
     
    }
});


