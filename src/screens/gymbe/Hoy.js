import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import CardCategorias from '../../components/categorias/CardCategorias';
import Reel from '../../components/profile/Reel';
import { useNavigation } from '@react-navigation/native';
import ListadoGyms from '../../components/Gyms/ListadoGyms';
import { AuthContext } from '../../context/AuthContext';

const fisioterapia = require('../../assets/gymBe/fisioterapeuta.png')
const masajista = require('../../assets/gymBe/masajista.png')
const nutricion = require('../../assets/gymBe/nutricion.png')
const pesas = require('../../assets/gymBe/pesas.png')
const pilate = require('../../assets/gymBe/pilates.png')
const fondo = require('../../assets/fondo.png')

const Hoy = () => {

    const navegation = useNavigation()


    const { singIn, status, token, user, error, signInWithGoogleAsync } = useContext(AuthContext)


    const { height } = Dimensions.get('window')

    return (
        <View>

            <View style={styles.container} >
                <View style={{ height: height * 0.1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, paddingHorizontal: 20, }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: user?.photoUrl,
                            }}
                        />
                        <View style={{ marginLeft: 13 }} >
                            <Text style={{ fontSize: 12, color: '#333fff' }}>Bienvenido</Text>
                            <Text style={{ fontSize: 20, }} >{user?.name}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <FontAwesome
                            onPress={() => navegation.navigate('Profile')}
                            style={{ marginRight: 25 }}
                            name="user-o" size={27}
                            color="#828282"
                        />
                        <FontAwesome5
                            name="bell"
                            size={27}
                            color="#828282"
                        />
                    </View>
                </View>

                {/* <View style={{ marginTop: 35 }} >
                        <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: 'bold', fontSize: 22 }} >Categorias</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <CardCategorias position={30} title={'Gym'} imagen={pesas} width={150} height={130} />
                            <CardCategorias position={10} title={'Pilates'} imagen={pilate} width={150} height={120} />
                            <CardCategorias position={0} title={'Nutricion'} imagen={nutricion} width={150} height={150} />
                            <CardCategorias position={0} title={'Masajistas'} imagen={masajista} width={150} height={130} />
                            <CardCategorias position={0} title={'Fisioterapeuta'} imagen={fisioterapia} width={120} height={120} />
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: 35 }} >
                        <Text style={{ paddingHorizontal: 20, marginBottom: 10, fontWeight: 'bold', fontSize: 22 }} >Personal Trainer</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Reel imagen={'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg'} />
                            <Reel imagen={'https://static.independent.co.uk/2021/11/10/08/ESP-CEL_PEOPLE-PAUL_RUUD_73783.jpg?width=990&auto=webp&quality=75&crop=982:726,smart'} />
                            <Reel imagen={'https://image.shutterstock.com/image-photo/young-girl-making-craft-homeschooling-600w-1970714576.jpg'} />
                            <Reel imagen={'https://cdn.pixabay.com/photo/2014/05/06/12/27/grey-crowned-crane-338834_960_720.jpg'} />
                            <Reel imagen={'https://cdn.pixabay.com/photo/2011/09/27/18/52/bird-9950_960_720.jpg'} />
                        </ScrollView>
                    </View> */}
                <View style={{ height: height * 0.85 }} >
                    <ListadoGyms />
                </View>

            </View>

            <StatusBar
                barStyle="dark-content"
            />
        </View>
    )
}

export default Hoy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
        // backgroundColor:'red'
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: '#333fff',
        borderWidth: 3
    },
})
