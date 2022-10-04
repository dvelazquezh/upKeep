import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Button } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RolContext } from '../../context/RolContext';

const OnboardingServices = () => {

    const { saveNewRol } = useContext(RolContext);

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

    const [animacion, setanimacion] = useState(new Animated.Value(0))

    const navigation = useNavigation()

    const [servicios, setservicios] = useState([])

    const presionarBtn = () => {
        Animated.timing(
            animacion, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }
        ).start()
    }

    const handleChangeServices = (value) => {
        setservicios(
            [...servicios,
                value]
        )
    }

    console.log(servicios);

    return (
        <LinearGradient
            colors={['#333fff', '#737cff', '#737cff']}
            style={{ flex: 1 }}>
            <View style={{ flex: 1 }} >

                <View style={{ marginTop: 100 }} >
                    <Text style={{ fontSize: 22, fontWeight: "bold", color: 'white', marginLeft: 20 }} >¿Qué tipo de servicios ofreces?</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: "center", marginTop: 10 }} >
                        {
                            optServices.map((item, index) => (
                                <View key={index} style={{ justifyContent: 'center', alignItems: 'center', width: '33%', height: 150 }} >

                                    <TouchableOpacity
                                        onPress={() => [handleChangeServices(`${item.occupation}`), presionarBtn()]}
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
                {
                    (servicios.length >= 1) && (
                        <Animated.View style={{ marginTop: 15 }} >
                            <TouchableOpacity
                                onPress={() => [saveNewRol(servicios,'contratista'), navigation.navigate('ProtectedScreen')]}
                                style={{ backgroundColor: '#333fff', transform: [{ scaleX: animacion }], height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 20 }} >
                                    <Text style={{ fontWeight: 'bold', fontSize: 22, marginRight: 30, color: 'white' }} >Ingresar</Text>
                                    <AntDesign name="right" size={30} color="white" />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                    )
                }
            </View>

            {/* <Button
                title="Go to Details"
                onPress={ () => saveNewRol(servicios)}
            /> */}


        </LinearGradient>
    )
}

export default OnboardingServices

const styles = StyleSheet.create({})
