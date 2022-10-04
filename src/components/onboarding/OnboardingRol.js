import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const OnboardingRol = ({ activeIndex, final }) => {


    const navigation = useNavigation()


    return (
        <View style={{ flex: 1, justifyContent: 'center' }} >
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: 'white', marginLeft: 20 }} >¿Qué tipo de usuario eres?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: "center", marginTop: 100 }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('OnboardingClient')}
                                    style={{ justifyContent: 'center', alignItems: 'center', height: 100, width: 100, borderRadius: 50 }}
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
                                    onPress={() => navigation.navigate('OnboardingServices')}
                                    style={{ justifyContent: 'center', alignItems: 'center', height: 100, width: 100, borderRadius: 50 }}
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
        </View>
    )
}

export default OnboardingRol

const styles = StyleSheet.create({})
