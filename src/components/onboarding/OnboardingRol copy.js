import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const OnboardingRol = ({ activeIndex, final }) => {

    const [animacion, setanimacion] = useState(new Animated.Value(0))
    const [animacion1] = useState(new Animated.Value(0))
    // const [animacionText] = useState(new Animated.Value(0))

    const presionarBtn = () => {
        Animated.timing(
            animacion, {
            toValue: 300,
            duration: 1000,
        }
        ).start()
    }
    const presionarBtn1 = () => {
        Animated.timing(
            animacion1, {
            toValue: 300,
            duration: 1000,
        }
        ).start()
    }

    const estiloAnimacion = {
        transform: [
            { translateX: animacion },
        ]
    }

    const navigation = useNavigation()

    const optServices = [
        {
            occupation: 'Fontanero',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Carpintero',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Construtor',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Plomero',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Pintor',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Electicista',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
        {
            occupation: 'Soldador',
            img: 'https://www.nosolopymes.com/imagenes/la-responsabilidad-civil-de-un-fontanero.jpg'
        },
    ]



    const [userType, setuserType] = useState('')

    const [servicios, setservicios] = useState([])

    const handleChangeServices = (value) => {
        setservicios(
            [...servicios,
                value]
        )
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center' }} >
            {
                (userType == '' || userType == 'Cliente') ?
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: 'white', marginLeft: 20 }} >¿Qué tipo de usuario eres?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: 100 }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity
                                    onPress={() => [setuserType('Cliente')]}
                                    style={
                                        userType == "Cliente" ? { justifyContent: 'center', alignItems: 'center', borderColor: '#333fff', borderWidth: 2, height: 100, width: 100, borderRadius: 50 } :
                                            { justifyContent: 'center', alignItems: 'center', height: 100, width: 100 }
                                    }
                                >
                                    <Image
                                        style={{ height: 100, width: 100 }}
                                        source={require('../../assets/cliente.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 19, color: 'white' }} > Cliente </Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity
                                    onPress={() => [setuserType('Contratista')]}
                                    style={
                                        userType == "Contratista" ? { justifyContent: 'center', alignItems: 'center', borderColor: '#333fff', borderWidth: 2, height: 100, width: 100, borderRadius: 50 } :
                                            { justifyContent: 'center', alignItems: 'center', height: 100, width: 100 }
                                    }
                                >
                                    <Image
                                        style={{ height: 125, width: 125 }}
                                        source={require('../../assets/contratista.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 19, color: 'white' }} >Contratista</Text>
                            </View>
                        </View>
                    </View>
                    :
                    (userType == 'Contratista') &&
                    <View style={{ marginTop: 100 }} >
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: 'white', marginLeft: 20 }} >¿Qué tipo de servicios ofreces?</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: "center", marginTop: 10 }} >
                            {
                                optServices.map((item, index) => (
                                    <View key={index} style={{ justifyContent: 'center', alignItems: 'center', width: '33%', height: 150 }} >

                                        <TouchableOpacity
                                            onPress={() => [handleChangeServices(`${item.occupation}`), presionarBtn1()]}
                                            style={
                                                servicios.includes(`${item.occupation}`) ? { justifyContent: 'center', alignItems: 'center', borderColor: 'blue', borderWidth: 3, height: 100, width: 100, borderRadius: 50 } :
                                                    { justifyContent: 'center', alignItems: 'center', height: 100, width: 100 }
                                            }
                                        >
                                            {
                                                servicios.includes(`${item.occupation}`) &&
                                                <View style={{ backgroundColor: 'white', height: 24, width: 24, borderRadius: 12, position: 'absolute', zIndex: 1, top: -5, right: 0 }} >
                                                    <AntDesign name="checkcircle" size={24} color="blue" />
                                                </View>
                                            }
                                            <Image
                                                style={{ height: 80, width: 80, borderRadius: 45 }}
                                                source={{ uri: item.img }}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 19, color: 'white' }} > {item.occupation} </Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>

            }

            {/* {
                (activeIndex == final && userType == 'Cliente') && (
                    <Animated.View style={{ marginTop: 100 }} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProtectedScreen')}
                            style={{ backgroundColor: '#333fff', width: animacion, height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 20 }} >
                                <Text style={{ fontWeight: 'bold', fontSize: 22, marginRight: 30, color: 'white' }} >Ingresar</Text>
                                <AntDesign name="right" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                )
            } */}
            {
                (activeIndex == final && servicios.length >= 1) && (
                    <Animated.View style={{ marginTop: 15 }} >
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ProtectedScreen')}
                            style={{ backgroundColor: '#333fff', width: animacion1, height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 20 }} >
                                <Text style={{ fontWeight: 'bold', fontSize: 22, marginRight: 30, color: 'white' }} >Ingresar</Text>
                                <AntDesign name="right" size={30} color="white" />
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                )
            }

        </View>
    )
}

export default OnboardingRol

const styles = StyleSheet.create({})
