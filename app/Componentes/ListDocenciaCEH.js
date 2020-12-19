import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCEA() {
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
            { key: '1', name: 'Luis Alberto ARRIOJA DÍAZ VIRUELL' },
            { key: '2', name: 'Thomas CALVO' },
            { key: '3', name: 'Chantal CRAMAUSSEL VALLET' },
            { key: '4', name: 'Claudia ESPEJEL CARBAJAL' },
            { key: '5', name: 'Rafael DIEGO FERNÁNDEZ SOTELO' },
            { key: '6', name: 'Martín GONZÁLEZ DE LA VARA' },
            { key: '7', name: 'Martín LÓPEZ AVALOS ' },
            { key: '8', name: 'Verónica OIKIÓN SOLANO' },
            { key: '9', name: 'Víctor ROMO DE VIVAR GAYOL' },
            { key: '10', name: 'Martín SÁNCHEZ RODRÍGUEZ' },
            { key: '11', name: 'José Antonio SERRANO ORTEGA' },
            { key: '12', name: 'Nelly SIGAUT' }
        ]
    }

]