import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { CheckIcon, Select, VStack, NativeBaseProvider, TextArea } from 'native-base';

const OnboardingClient1 = () => {

    const navigation = useNavigation()

    const [service, setService] = useState('')


    return (
        <NativeBaseProvider>
            <LinearGradient
                // colors={['#333fff', '#737cff', '#737cff']}
                colors={['#ffffff', '#ffffff', '#ffffff']}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 10 }} >

                    <View style={{ marginTop: 25, height: '10%', justifyContent: 'center' }} >
                        <Text style={{ color: '#3c3c3c', fontSize: 22 }} >Lista de contratistas</Text>
                    </View>

                    <View style={{ height: '50%', marginBottom: 20 }} >
                        <ScrollView>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }} >
                                <View>
                                    <Image
                                        style={{ width: 70, height: 70, borderRadius: 50 }}
                                        source={require('../../assets/welcome/lim.png')}
                                    />
                                </View>
                                <View style={{ marginLeft: 30 }} >
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Nombre</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Resena</Text>
                                    <Text style={{ color: '#3c3c3c', fontSize: 18 }} >Calificacion</Text>
                                </View>
                            </View>

                        </ScrollView>

                    </View>



                    <View style={{ height: '20%' }} >
                        <View style={{ marginTop: 10 }} >
                            <VStack space={4}>
                                <Select
                                    selectedValue={service}
                                    minWidth="200"
                                    accessibilityLabel="Tipo de pago"
                                    placeholder="Tipo de pago"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={(itemValue) => setService(itemValue)}
                                >
                                    <Select.Item label="pago 1" value="pago 1" />
                                    <Select.Item label="pago 2" value="pago 2" />
                                    <Select.Item label="pago 3" value="pago 3" />
                                </Select>
                            </VStack>
                        </View>


                        <View style={{ marginVertical: 10 }} >
                            <VStack space={4}>
                                <Select
                                    selectedValue={service}
                                    minWidth="200"
                                    accessibilityLabel="Tipo de politicas"
                                    placeholder="Tipo de politicas"
                                    _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />,
                                    }}
                                    mt={1}
                                    onValueChange={(itemValue) => setService(itemValue)}
                                >
                                    <Select.Item label="politicas 1" value="politicas 1" />
                                    <Select.Item label="politicas 2" value="politicas 2" />
                                    <Select.Item label="politicas 3" value="politicas 3" />
                                </Select>
                            </VStack>
                        </View>

                        <TextArea
                            h={20}
                            placeholder="Materiales propuestos"
                            w={{
                                base: "100%",
                                md: "25%",
                            }}
                        />

                        <TouchableOpacity
                            style={{ backgroundColor: '#1331f7', padding: 10, borderRadius: 5, marginTop: 10 }}
                            onPress={() => navigation.navigate('OnboardingClient2')}
                        >
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }} >Aceptar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>

        </NativeBaseProvider>
    )
}

export default OnboardingClient1

const styles = StyleSheet.create({})
