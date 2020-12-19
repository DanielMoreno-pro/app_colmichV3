import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Biblioteca from "../screens/Biblioteca/Biblioteca";
import Pappers from "../screens/Biblioteca/Pappers";
import Tesis from "../screens/Biblioteca/Tesis";
import Publicaciones from "../screens/Biblioteca/Publicaciones";
import Libros from "../screens/Biblioteca/Libros";

const Stack = createStackNavigator();

export default function AlumnosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="biblioteca"
        component={Biblioteca}
        options={{ title: "Biblioteca" }}
      />
        <Stack.Screen
        name="pappers"
        component={Pappers}
        options={{ title: "Pappers" }}
      />
        <Stack.Screen
        name="tesis"
        component={Tesis}
        options={{ title: "Tesis de investigacion" }}
      />
        <Stack.Screen
        name="publicaciones"
        component={Publicaciones}
        options={{ title: "Publicaciones" }}
      />
        <Stack.Screen
        name="libros"
        component={Libros}
        options={{ title: "Libros" }}
      />
    </Stack.Navigator>
  );
}
