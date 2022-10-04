import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const WelcomeRegister = () => {
    return (
        <View style={{ height: '50%', marginBottom:15}} >
            <View style={{ flexDirection:'row', alignItems:'center'}} >
                <Image
                    style={{ marginVertical: 10, marginLeft: 10, width: 35, height: 40 }}
                    source={require('../../assets/orbitas.png')}
                />
                <Text style={{fontSize:25, marginLeft:10}} >upKep</Text>
            </View>
            <Image
                style={{ width: 320, height: 320 }}
                source={require('../../assets/welcome/lim.png')}
            />

        </View>
    )
}

export default WelcomeRegister

const styles = StyleSheet.create({})
