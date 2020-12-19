import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCEGH() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={DATA}
                renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.section}>{section.title}</Text>}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 22,
        height: 50,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    section: {
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: '#eee',
        paddingTop: 2,
        paddingLeft: 10,
        paddingTop: 10
    },
    textTitle: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})

const DATA = [
    {
        title: 'Docencia',
        data: [
            { key: '1', name: 'Ángeles Alberto-Villavicencio' },
            { key: '2', name: 'Nubia Cortés Márquez' },
            { key: '3', name: 'José de Jesús Hernández López' },
            { key: '4', name: 'Martha Chávez Torres' },
            { key: '5', name: 'Octavio M. González Santana' },
            { key: '6', name: 'José Luis Alcauter Guzmán' },
            { key: '7', name: 'Leticia I. Mejía Guadarrama' },
            { key: '8', name: 'Octavio Augusto Montes Vega' },
            { key: '9', name: 'Carlos Alberto Téllez Valencia' },
            { key: '10', name: 'Carlos Alberto Téllez Valencia' },
            { key: '11', name: 'Nemer Eduardo Narchi Narchi' }
  
        ]
    }

]