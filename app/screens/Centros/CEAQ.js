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
     source={{ uri: 'https://source.unsplash.com/featured/?{Archeology}' }}
    />

<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"El Centro de Estudios Arqueológicos (CEQ) de El Colegio de Michoacán lleva a cabo como actividades sustantivas la investigación, la docencia, la vinculación interinstitucional, la difusión y la divulgación de la investigación arqueológica. Los profesores que constituyen la planta académica del CEQ son arqueólogos con especialidades en otras disciplinas, con experiencia internacional."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

<Button style={styles.viewBtn}
        title="Docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("DocentesCEAQ")}
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


