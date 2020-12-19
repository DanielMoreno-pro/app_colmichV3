import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCET() {
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
            { key: '1', name: 'LEOPOLDO LÓPEZ VALENCIA' },
            { key: '2', name: 'ALBERTO CARRILLO CÁZARES' },
            { key: '3', name: 'MOISÉS FRANCO MENDOZA' },
            { key: '4', name: 'CARLOS HERREJÓN PEREDO' },
            { key: '5', name: 'AGUSTÍN JACINTO ZAVALA' },
            { key: '6', name: 'NORA JIMÉNEZ HERNÁNDEZ' },
            { key: '7', name: 'HANS ROSKAMP' },
            { key: '8', name: 'ROSA LUCAS GONZÁLEZ' },
            { key: '9', name: 'PEDRO MARQUEZ JOAQUÍN '},
            { key: '10', name: 'FRANCISCO MIRANDA GODINÉZ' },
            { key: '11', name: 'ÁLVARO OCHOA SERRANO' }
        ]
    }

]