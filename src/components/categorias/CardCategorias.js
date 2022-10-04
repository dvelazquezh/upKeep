import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const CardCategorias = ({title,imagen,width,height, position}) => {
    return (
        <View style={{marginLeft:30}} >
            <LinearGradient
                colors={['#333fff', '#979DFE', '#29c4ff']}
                style={styles.card}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <View style={{ alignItems: 'center', marginTop: 20 }} >
                        <Text style={{ color: 'white', fontSize: 15 }} >{title}</Text>
                    </View>
                    <Image
                        style={{right:position, resizeMode:'contain', marginTop: 10, width, height }}
                        source = {imagen}
                    />

                </View>
            </LinearGradient>
        </View>
    )
}

export default CardCategorias

const styles = StyleSheet.create({
    card: {
        height: 180,
        width: 135,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
})
