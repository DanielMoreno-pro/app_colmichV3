import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../Componentes/ListItem';
import useFetch from '../../hooks/useFetch';



export default function ListaEventos({ navigation }) {

    const { loading, data: reservaciones } = useFetch('http://192.168.0.100:3000/reservaciones')

    return (
        <View style={styles.container}>
            {loading ? <Text>Cargando ...</Text> :
                <FlatList
                    style={styles.list}
                    data={reservaciones}
                    keyExtractor={x => x.id}
                    renderItem={({ item }) =>
                        <ListItem
                            onPress={() => navigation.navigate('grupos-det', { id: item.id, evento: item.evento })}
                            nomGrupo={item.evento}
                        />
                    }
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    }
});