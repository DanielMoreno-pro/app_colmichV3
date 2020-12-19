import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { Button, ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Maestro() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Text style={styles.textTitle}>Reservaciones</Text>

      <View style={styles.viewBtn}>
        <Button
          title="Ver Eventos"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("eventos-info")}
        />

        <Button
          title="Agregar Evento"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("agregar-evento")}
        />
      </View>

      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} type="material-community" />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
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
    backgroundColor: "#00a680"
  },
  btnContainer: {
    width: "70%",
    marginTop: 20
  },
  viewBtn: {
    flex: 6,
    alignItems: "center"
  }
});

const list = [
  {
    title: "Salon A",
    icon: "google-classroom"
  },
  {
    title: "Salon B",
    icon: "google-classroom"
  },
  {
    title: "Salon C",
    icon: "google-classroom"
  },
  {
    title: "Sala de Computo",
    icon: "google-classroom"
  },
  {
    title: "audiotio",
    icon: "google-classroom"
  }
];

