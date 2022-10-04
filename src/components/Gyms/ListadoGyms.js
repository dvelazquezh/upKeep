import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Gym from './Gym'

const ListadoGyms = () => {
    return (
        <ScrollView>
            <View style={{ marginTop: 10 }} >
                <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: 'bold', fontSize: 22 }} >Lorem, ipsum dolor.</Text>
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"}
                />
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"
                    }
                />
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"}
                />
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"
                    }
                />
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"}
                />
                <Gym
                    imagen='https://www.hazunaweb.com/imagenes/prueba.jpg'
                    nombre={"lorem ipsum"
                    }
                />
            </View>
        </ScrollView>
    )
}

export default ListadoGyms

const styles = StyleSheet.create({})
