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
     source={{ uri: 'https://source.unsplash.com/featured/?{Geography}' }}
    />

<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"El Centro de Estudios de Geografía Humana (CEGH) se fundó en el año de 2002 con el objetivo de investigar problemas sociales, culturales, económicos y ambientales en su dimensión espacial. El Centro cuenta con un programa de Maestría en Geografía Humana que tiene la finalidad de formar recursos humanos capaces de aportar a las ciencias sociales desde el conocimiento geográfico multidisciplinario. Dicho programa cuenta con el reconocimiento de “consolidado en el Padrón de Posgrados de Calidad."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

<Button style={styles.viewBtn}
        title="Docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("DocentesCEGH")}
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


