import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import ListTrainer from '../../components/trainers/ListTrainer'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Trainers = () => {

    const navigation = useNavigation();

    return (
        <View>
            {/* <View style={{ height: '40%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Formularios')}
                    style={{ position: 'absolute', zIndex: 1, top: 63, right: 15 }}
                >
                    <FontAwesome name="pencil-square-o" size={24} color="white" />
                </TouchableOpacity>
                <Text style={{ position: 'absolute', zIndex: 1, top: 60, color: '#f5f5f5', fontWeight: 'bold', fontSize: 22, textTransform: 'uppercase' }} >Ipsum dolor</Text>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/07/02/10/27/training-828764_960_720.jpg' }}
                />
                <Text style={{ position: 'absolute', zIndex: 1, bottom: 120, color: '#f5f5f5', fontSize: 18 }} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora.</Text>
            </View>


            <ListTrainer />




            <StatusBar
                barStyle="light-content"
            /> */}
        </View>
    )
}

export default Trainers

const styles = StyleSheet.create({})
