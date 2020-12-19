import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { initialWindowSafeAreaInsets } from "react-native-safe-area-context";


export default function Maestro() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Bienvenido a la Biblioteca Luis Gonzáles</Text>

      <View style={styles.viewBtn}>
        <Button
         icon={{
           name: "book",
           size: 15,
            color: "white"
            }}
          
  
          title="Pappers"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => window.location.href= "mailto:cavs@colmich.edu.mx"}
          
          
        />
           <Button
           icon={{
            name: "book",
            size: 15,
             color: "white"
             }}

          title="Tesis"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          /*onPress={() => navigation.navigate("tesis")}*/
          onPress={() => window.location.href= "https://www.colmich.edu.mx/biblio/"}

        />
            <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Publicaciones"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("publicaciones")}
        />
            <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Libros"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("libros")}
        />
      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  textTitle: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },

  btnStyle: {
    backgroundColor: "#008CBA"
  },

  btnContainer: {
    width: "70%",
    marginTop: 20,
    
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});


