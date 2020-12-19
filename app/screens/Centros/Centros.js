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
      <Text style={styles.textTitle}>CENTROS DE ESTUDIOS</Text>

      <View style={styles.viewBtn}>
        <Button
         icon={{
           name: "book",
           size: 15,
            color: "white"
            }}
          
  
          title="Centros de Estudios Atropologicos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("CEA")}
          
          
        />
           <Button
           icon={{
            name: "book",
            size: 15,
             color: "white"
             }}

          title="Centro de Estudios Hístoricos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          /*onPress={() => navigation.navigate("tesis")}*/
          onPress={() => navigation.navigate("CEH")}

        />
            <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Centro de Estudios Rurales"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("CER")}
        />
            <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Centro de Estudios de las Tradiciones"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("CET")}
        />

        <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Centro de Estudios Arqueológicos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("CEAQ")}
        />   


        <Button
            icon={{
              name: "book",
              size: 15,
               color: "white"
               }}
          title="Centro de Estudios de Geografia Humana"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("CEGH")}
        />   

         <Button
            icon={{
              name: "user",
              size: 15,
               color: "white"
               }}
          title="Docentes spor grupo"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("Docentes")}
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
    backgroundColor: "#008000"
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