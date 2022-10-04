import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Trainers = ({imagen}) => {



    return (
        <View style={{ backgroundColor: 'white', marginTop: 20, marginHorizontal: 25, borderRadius: 10, flexDirection: 'row' }} >
            <Image
                style={{ width: 100, height: 100, borderRadius:5 }}
                source={{ uri: imagen }}
            />
            <View style={{ width: '70%' }} >
                <Text style={{ marginLeft: 10, textAlign: "auto", fontSize: 17 }} >Nombre</Text>
                <Text style={{ marginLeft: 10, textAlign: "auto" }} >Lorem ipsum dolor sit amet consectetur adipisicing.</Text>
                <Text style={{ marginLeft: 10, textAlign: "auto" }} >******</Text>
            </View>
        </View>
    )
}

export default Trainers

const styles = StyleSheet.create({})
