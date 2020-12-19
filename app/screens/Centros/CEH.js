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
     source={{ uri: 'https://source.unsplash.com/featured/?{History}' }}
    />

<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"El Centro de Estudios Históricos de El Colegio de Michoacán surgió en 1979 bajo los auspicios de un selecto grupo de profesores y la dirección de Luis González y González como una alternativa a los programas de postgrado en América Latina, en general, y en México, en particular. Muchos de los estudiantes que han pasado por sus aulas se distinguen hoy en día por laborar en las principales universidades públicas y centros de investigación del país, por acumular cuantiosos reconocimientos y por alentar el desarrollo profesional de la historia."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

<Button style={styles.viewBtn}
        title="Docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("DocentesCEH")}
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


