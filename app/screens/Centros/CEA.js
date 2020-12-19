import React from "react";
import { Image, StyleSheet, View, TextInput, requireNativeComponent, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function CEA() {
  const navigation = useNavigation();
  return (
  <View style={styles.viewBtn}>
  <Image
      style={styles.photo}
     /* source={require("../imagenes/colmich.jpg")}*/
     /* source={{uri: "./imagenes/colmich.jpg" }}*/
     source={{ uri: 'https://source.unsplash.com/featured/?{maya}' }}
    />

   

 
<TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"El Centro de Estudios Antropológicos se ha nutrido de varias tradiciones  significativas de la antropología. Una de ella es la escuela de Manchester, encabezada por Max Gluckman; otra refiere a una corriente crítica de la antropología norteamericana encabezada por Eric Wolf y una tercera es el conjunto de enfoques interpretativos basados en lengua y cultura que dialogan con las otras dos. En el CEA existe ya una importante tradición que vincula ambas perspectivas al combinar el estudio de comunidades en contextos regionales, y la historia social y cultural en los procesos de construcción de formas de dominación. Temas recurrentes de análisis han sido el género, la migración, la etnicidad, los movimientos sociales, la cultura regional, los procesos políticos y el Estado."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={10}
            multiline={true}
          />

<Button style={styles.viewBtn}
        title="Docentes"
        buttonStyle={styles.btnStyle}
        containerStyle={styles.btnContainer}
        onPress={() => navigation.navigate("Docentes")}
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


