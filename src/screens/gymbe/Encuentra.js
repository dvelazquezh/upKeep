import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Platform, TextInput, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Ionicons, Fontisto, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

import { markers } from '../../models/mapData'


const Encuentra = () => {

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
        <View style={styles.container}>
            {/* <View style={{ alignItems: 'center', marginTop: 50 }} >
                <View
                    style={{ backgroundColor: 'white', bottom: 0, height: 50, width: "90%", margin: 10, borderRadius: 15, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TextInput
                        style={{ fontSize: 15, color: '#000', width: '80%' }}
                        placeholder="Buscar"
                    />
                    <AntDesign name="search1" size={24} color="black" />
                </View>
                <ScrollView
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    height={60}
                    contentInset={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 20,
                    }}
                    contentContainerStyle={{
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                    style={{ top: 2, width: '100%' }}
                >
                    {
                        state.categories.map((category, index) => (
                            <TouchableOpacity key={index} style={{ flexDirection: 'row', marginHorizontal: 10, paddingHorizontal: 10, borderRadius: 20, backgroundColor: 'white', height: 45, alignItems: 'center' }} >
                                {category.icon}
                                <Text> {category.name}</Text>
                            </TouchableOpacity>
                        ))
                    }

                </ScrollView>
            </View>
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


            <ScrollView
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                height={200}
                contentInset={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 20,
                }}
                contentContainerStyle={{
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
                style={{ position: 'absolute', bottom: 20 }}
            >
                {
                    state.markers.map((market, index) => (
                        <View key={index} style={{ width: 250, height: 200, marginRight: 20, borderRadius: 15, backgroundColor: 'white', borderColor: '#828282', justifyContent: 'center', alignItems: 'center' }} >
                            <Image
                                style={{ flex: 1, resizeMode: 'cover', width: '100%', height: '100%', borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                                source={market.image}
                            />
                            <View style={{ flex: 1, width: '90%', justifyContent: 'center', alignItems: 'flex-start' }} >
                                <Text style={{ fontWeight: 'bold', fontSize: 19 }} >{market.title}</Text>
                                <Text>* * * * *</Text>
                                <Text style={{ textAlign: 'auto' }} >{market.description}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <StatusBar
                barStyle="dark-content"
            /> */}
        </View>
    )
}

export default Encuentra

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    map: {
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
    },
})
