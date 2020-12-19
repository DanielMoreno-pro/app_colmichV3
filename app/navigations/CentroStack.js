import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Centros from "../screens/Centros/Centros";
import CEA from "../screens/Centros/CEA";
import CEH from "../screens/Centros/CEH";
import CER from "../screens/Centros/CER";
import CET from "../screens/Centros/CET";
import CEAQ from "../screens/Centros/CEAQ";
import CEGH from "../screens/Centros/CEGH";
import listaDocentes from "../screens/Centros/ProfesoresGrupo";
import listaDocentesCEA from "../screens/Centros/ProfesoresCEA";
import listaDocentesCEH from "../screens/Centros/ProfesoresCEH";
import listaDocentesCER from "../screens/Centros/ProfesoresCER";
import listaDocentesCET from "../screens/Centros/ProfesoresCET";
import listaDocentesCEAQ from "../screens/Centros/ProfesoresCEAQ";
import listaDocentesCEGH from "../screens/Centros/ProfesoresCEGH";

const Stack = createStackNavigator();

export default function MateriaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Centros"
        component={Centros}
        options={{ title: "Centros de Estudio" }}
      />
     <Stack.Screen
        name="Docentes"
        component={listaDocentes}
        options={{ title: "Docentes" }}
      />
       <Stack.Screen
        name="DocentesCEA"
        component={listaDocentesCEA}
        options={{ title: "Docentes" }}
      />
         <Stack.Screen
        name="DocentesCEH"
        component={listaDocentesCEH}
        options={{ title: "Docentes" }}
      />
         <Stack.Screen
        name="DocentesCER"
        component={listaDocentesCER}
        options={{ title: "Docentes" }}
      />
         <Stack.Screen
        name="DocentesCET"
        component={listaDocentesCET}
        options={{ title: "Docentes" }}
      />
          <Stack.Screen
        name="DocentesCEAQ"
        component={listaDocentesCEAQ}
        options={{ title: "Docentes" }}
      />
        <Stack.Screen
        name="DocentesCEGH"
        component={listaDocentesCEGH}
        options={{ title: "Docentes" }}
      />

<Stack.Screen
        name="CEA"
        component={CEA}
        options={{ title: "Centros de Estudio en Antropología" }}
      />

<Stack.Screen
        name="CEH"
        component={CEH}
        options={{ title: "Centros de Estudio Hístoricos" }}
      />

<Stack.Screen
        name="CER"
        component={CER}
        options={{ title: "Centros de Estudio Rurales" }}
      />
      
      <Stack.Screen
        name="CET"
        component={CET}
        options={{ title: "Centros de Estudio de las Tradiciones" }}
      />
<Stack.Screen
        name="CEAQ"
        component={CEAQ}
        options={{ title: "Centros de Estudio Arqueológicos" }}
      />
<Stack.Screen
        name="CEGH"
        component={CEGH}
        options={{ title: "Centros de Estudio de Geografia Humana" }}
      />
    </Stack.Navigator>
  );
}
