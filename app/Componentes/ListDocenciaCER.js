import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCER() {
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
            { key: '1', name: 'Salvador ÁLVAREZ SUÁREZ' },
            { key: '2', name: 'Elizabeth ARAIZA HERNANDEZ ' },
            { key: '3', name: 'Esteban BARRAGÁN LÓPEZ' },
            { key: '4', name: 'Ofelia BECERRIL QUINTANA' },
            { key: '5', name: 'Miguel J. HERNÁNDEZ MADRID' },
            { key: '6', name: 'Nicola Maria KEILBACH BAER' },
            { key: '7', name: 'Gustavo LÓPEZ CASTRO' },
            { key: '8', name: 'Oscar Ariel MOJICA MADRIGAL ' },
            { key: '9', name: 'Víctor Manuel ORTIZ AGUIRRE ' },
            { key: '10', name: 'Philippe SCHAFFHAUSER MIZZI' },
            { key: '11', name: 'José Luis SEEFOÓ LUJÁN' },
            { key: '12', name: 'Ma. del Carmen VENTURA PATIÑO ' },
            { key: '13', name: 'Yanga VILLAGÓMEZ VELÁZQUEZ' },
            { key: '14', name: 'Juan Sergio ZENDEJAS ROMERO' }
        ]
    }

]