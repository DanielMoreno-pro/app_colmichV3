import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Reservacion from "../screens/Reservacion/Reservacion";
import EventosInfo from "../screens/Reservacion/EventosInfo";
import AgregarEvento from "../screens/Reservacion/AgregarEvento";


const Stack = createStackNavigator();

export default function MaestroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="reservacion"
        component={Reservacion}
        options={{ title: "Reservacion" }}
      />
       <Stack.Screen
        name="eventos-info"
        component={EventosInfo}
        options={{ title: "Detalle de eventos" }}
      />
             <Stack.Screen
        name="agregar-evento"
        component={AgregarEvento}
        options={{ title: "Registrar nuevo Evento" }}
      />
    </Stack.Navigator>
  );
}
