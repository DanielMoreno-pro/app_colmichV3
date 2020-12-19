import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";

export default function ListGroupCEAQ() {
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
            { key: '1', name: 'Agapi FILINI' },
            { key: '2', name: 'Blanca MALDONADO ÁLVAREZ ' },
            { key: '3', name: 'Eduardo WILLIAMS MARTÍNEZ ' },
            { key: '4', name: 'José Alberto AGUIRRE ANAYA ' },
            { key: '5', name: 'Joshua D. ENGLEHARDT' },
            { key: '6', name: 'Juan Rodrigo ESPARZA LÓPEZ' },
            { key: '7', name: 'Magdalena Amalia GARCÍA SÁNCHEZ ' },
            { key: '8', name: 'María Antonieta JIMÉNEZ IZARRARAZ' },
            { key: '9', name: 'Verenice Y. HEREDIA ESPINOZA ' },
            { key: '10', name: 'Fernando May Crespo' }
        ]
    }

]