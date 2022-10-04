import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeBaseProvider, Input } from "native-base"
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';

import { markers } from '../../models/mapData'

const OnboardingClient = () => {

    const navigation = useNavigation()

    const initialMapState = {
        markers,
        categories: [
            {
                name: 'Deportes de contacto',
                icon: <MaterialCommunityIcons name="karate" size={24} color="black" />,
            },
            {
                name: 'Nutrición',
                icon: <Ionicons name="ios-restaurant" size={18} />,
            },
            {
                name: 'Fisioterapia',
                icon: <FontAwesome5 name="spa" size={24} color="black" />
            },
            {
                name: 'Pilates',
                icon: <FontAwesome5 name="running" size={24} color="black" />,
            },
            {
                name: 'Pesas',
                icon: <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />,
            },
        ],
        region: {
            latitude: 9.971916645010651,
            longitude: -83.98368454426783,
            latitudeDelta: 0.9,
            longitudeDelta: 1.0,
        },
    };


    const [state, setState] = useState(initialMapState);

    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);

    return (
        <NativeBaseProvider>
            <LinearGradient
                colors={['#333fff', '#f0f2fe', '#f9faff']}
                style={{ flex: 1 }}>
                <View style={{ flex: 1 }} >
                    {/* 
                <View style={{ marginTop: 50, height: '10%', backgroundColor: 'red' }} >
                    <Text style={{ color: 'white' }} >paso 1</Text>
                </View> */}

                    <View style={{ height: '60%', backgroundColor: 'blue' }} >
                        <MapView
                            ref={_map}
                            style={styles.map}
                            initialRegion={state.region}
                        >
                            {
                                state.markers.map((marker, index) => {
                                    return (
                                        <Marker key={index} coordinate={marker.coordinate} >

                                        </Marker>
                                    )
                                })
                            }
                        </MapView>
                    </View>
                    <View style={{ height: '40%', paddingHorizontal: 5, justifyContent:'center' }} >
                        <View>
                            <Text style={{ color: '#5e5e5e', fontSize: 20 }} >Tipo de reparacion</Text>
                            <View style={{ alignItems: 'center', marginVertical: 5 }} >
                                <Input
                                    mx="3"
                                    placeholder="Tipo de reparacion"
                                    w={{
                                        base: "100%",
                                        md: "100%",
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{ color: '#5e5e5e', fontSize: 20 }} >Presupuesto</Text>
                            <View style={{ alignItems: 'center', marginVertical: 5 }} >
                                <Input
                                    keyboardType='numeric'
                                    mx="3"
                                    placeholder="0"
                                    w={{
                                        base: "100%",
                                        md: "100%",
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#1331f7', padding: 10, borderRadius: 5, marginTop: 10 }}
                            onPress={() => navigation.navigate('OnboardingClient1')}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }} >Aceptar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>
        </NativeBaseProvider>
    )
}

export default OnboardingClient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        // position: 'absolute',
        // zIndex: -1,
        width: '100%',
        height: '100%',
    },
})
