import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Contacto from "../screens/Contacto/Contacto";

const Stack = createStackNavigator();

export default function PromedioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="contacto"
        component={Contacto}
        options={{ title: "Contactnos!" }}
      />
    </Stack.Navigator>
  );
}
