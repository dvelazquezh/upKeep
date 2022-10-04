import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Gym = ({nombre, imagen}) => {
    return (
        <View style={{ marginBottom: 10, width: '100%', height: 100, flexDirection: 'row' }} >
            <Image
                style={{ width: 100, height: 100,borderRadius:10, marginLeft:10 }}
                source={{
                    uri: imagen,
                }}
            />
            <View style={{ marginLeft: 20, width: '70%', justifyContent: 'center' }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{nombre}</Text>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, sequi.</Text>
                <View style={{flexDirection:'row', marginTop:5}} >
                    <AntDesign name="staro" size={24} color="#ffbf00" />
                    <AntDesign name="staro" size={24} color="#ffbf00" />
                    <AntDesign name="staro" size={24} color="#ffbf00" />
                    <AntDesign name="staro" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default Gym

const styles = StyleSheet.create({})
