import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { StyleSheet, View, ScrollView, Button, Text } from "react-native";
    
export default function Promedio() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
    <View style={styles.viewInput}>

  

    <Input style={styles.inputStyle}
  placeholder='ASUNTO'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
    />


<Input
  placeholder='NOMBRE O INSTITUCION'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>

<Input
  placeholder='CORREO ELECTRONICO'
  leftIcon={
    <Icon
      name='at'
      size={24}
      color='black'
    />
  }
/>

<Input
  placeholder='MENSAJE'
  leftIcon={
    <Icon
      name='texture'
      size={24}
      color='black'
    />
  }
/>
<Button
     title="Enviar"
     buttonStyle={styles.btnStyle}
     containerStyle={styles.btnContainer}
     onPress={() => window.location.href= "https://www.colmich.edu.mx/index.php/contactanos"}
  
 />

  </View>
  
  </ScrollView>
  

    
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 50,
    marginRight: 50,
    padding: 50
  },
  viewInput: {
    flex: 6,
    alignItems: "center"
  },
  inputStyle:{
    padding: 5
   
  },
  btnStyle: {
    backgroundColor: "#008CBA"
  },
  btnContainer: {
    width: "200%",
    marginTop: 20,
    
  }
});
