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
            { key: '1', name: 'MARCO ANTONIO JOSÉ CALDERON MÓLGORA' },
            { key: '2', name: 'ELIZABETH JUÁREZ CERDI' },
            { key: '3', name: 'PAUL M. LIFFMAN' },
            { key: '4', name: 'SALVADOR MALDONADO ARANDA' },
            { key: '5', name: 'CRISTINA MONZÓN GARCÍA' },
            { key: '6', name: 'GAIL ROBERTA MUMMERT FULMER' },
            { key: '7', name: 'DOMINIQUE RABY' },
            { key: '8', name: 'AANDREW JOHN ROTH SENEFF' },
            { key: '9', name: 'LAURA ROUSH' },
            { key: '10', name: 'JORGE UZETA' },
            { key: '11', name: 'GABRIELA ZAMORANO VILLAREAL' },
            { key: '12', name: 'JOSÉ EDUARDO ZÁRATE HÉRNANDEZ' }
        ]
    }

]